import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<h2>
             Welcome {{name}}
             </h2>
             <h2>
              {{3+6}}
             </h2>
             <h2>
              {{"Welcome" +name}}
             </h2>
             <h2>
              {{name.length}}
             </h2>
             <h2>
              {{greetUser()}}
             </h2>
             <h2>{{siteUrl}}</h2>
             <input type="text" value="Rajani">
             <input [id]="myId" type="text" value="Rajani">
             <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Rajani">
             <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Rajani">
             <h1 class="text-success">AngularScript</h1>
             <h1 [class]="successClass">AngularScript</h1>
             <h1 [class.text-danger]="hasError">AngularScript</h1>
             <h1 [ngClass]="messageClasses">AngularScript</h1>
             <h3 [style.color]="'orange'">Style binding</h3>
             <h3 [style.color]="hasError?'red':'green'">Style binding2</h3>
             <h3 [ngStyle]="tittleStyles">Style binding3</h3>
             <button (click)= "onClick($event)">Greet</button>
             {{greeting}}
             <button (click)="greeting='welcome to angular'">button</button>
             <input #myInput type="text">
             <button (click)="logMessage(myInput.value)">log</button>
             `,
  styles: [`
  h2 {
    color:blue;
  }
  .text-success {
    color:green;
  }
  .text-danger {
    color:red;
  }
  .text-special {
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {
public name="Rajani"
public myId="testId"
public isDisabled=false;
public successClass= "text-success";
public hasError= false;
public isSpecial= true;
public messageClasses= {
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isSpecial
}
public tittleStyles={
  color:"blue",
  fontStyle:"italic"
}
public greeting="";
public siteUrl =window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello" + this.name;
  }
  onClick(event:any){
    console.log(event);
    console.log("Welcome to Angular");
    this.greeting="Welcome to Angular"
    this.greeting=event.type
  }
  logMessage(value:any){
    console.log(value);
  }

}
