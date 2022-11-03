import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:any;
  constructor(private service:UserService,private swUpdate:SwUpdate) { }

  ngOnInit(): void {
    this.service.getAlluser().subscribe((data)=>{
      this.users=data;
    });

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("New version available. Load New Version?")) {

              window.location.reload();
          }
      });
  }        
  }
  // updateUser(){
  //   if(!this.update.isEnabled){
  //     console.log('Not enabled');
  //     return;
  //   }
  //   this.update.available.subscribe();
  //   if(confirm('')){
  //     this.update.activateUpdate().then(()=>location.reload())
  //   }
  //   this.update.activateUpdate.subscribe()
  //   }
    
  }


