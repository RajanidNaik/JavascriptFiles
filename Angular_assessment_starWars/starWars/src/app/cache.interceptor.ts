import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { StarWarsPeopleService } from './star-wars-people.service';
const TIME_TO_LIVE =10;
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheResolver: StarWarsPeopleService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     if(request.method !== 'GET'){
      return next.handle(request);
     }
     const cacheResponse = this.cacheResolver.get(request.url);
     return  cacheResponse ? of(cacheResponse) :this.sendRequest(request,next);
   
  }
  sendRequest(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
return next.handle(request).pipe(
  tap((event:any)=>{
    if(event instanceof HttpResponse){
      this.cacheResolver.set(request.url,event,TIME_TO_LIVE);
    }
  })
)
  }
}
