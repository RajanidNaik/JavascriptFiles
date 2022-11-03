import { Component } from '@angular/core';
import { PrimeCalculator } from './prime';
import { Factorial } from './factorial';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webWorker';
  prime10 : number = 0;
   prime10000 : number = 0;
  factnum:any = 0;
  factNthnum:any=0;
  number=0;
  primenum=0;


   find10thPrimeNumber() {
      this.prime10 = PrimeCalculator.findNthPrimeNumber(10);
   }

   //using web worker

   find10000thPrimeNumber() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        // console.log(`page got message: ${data}`);
        this.prime10000=data;
        
      };
      // worker.postMessage('hello');
      worker.postMessage('10000');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
   }

  //without using web worker

  //  find10000thPrimeNumber(){
  //   this.prime10000=PrimeCalculator.findNthPrimeNumber(10000);
  //  }


  // findFactnumber(){
  //   this.factnum = Factorial.findfactofnum(this.number);
  //   console.log(this.factnum);
  // }
  findNthfactnumber() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        // console.log(`page got message: ${data}`);
        this.factNthnum=data[0];
        this.prime10000=data[1]
      };
      // worker.postMessage('hello');
      worker.postMessage([this.number,this.primenum]);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
   }

}

