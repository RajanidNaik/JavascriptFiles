import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:any=[];
  errorMsg:string='Loading';
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data)=>{
      
      this.users=data;
      console.log(data);
          },(err)=>{
            this.errorMsg=err.message;
          });
  }
  title = 'httpService';
}
