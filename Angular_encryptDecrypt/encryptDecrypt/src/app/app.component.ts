import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encryptDecrypt';
 message:string='';
 keyword:string='';
 encryptedMessage:string='';
 decryptedMessage:string='';

 encrypt() {
  this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.keyword.trim()).toString();
 
 }
 decrypt(){
  this.decryptedMessage = CryptoJS.AES.decrypt( this.encryptedMessage,  this.keyword.trim() ).toString(CryptoJS.enc.Utf8);
 }
}
