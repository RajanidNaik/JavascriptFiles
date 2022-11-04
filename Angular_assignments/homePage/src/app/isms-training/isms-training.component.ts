import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isms-training',
  templateUrl: './isms-training.component.html',
  styleUrls: ['./isms-training.component.css']
})
export class IsmsTrainingComponent implements OnInit {
  checked = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCross(){
    this.checked=false;
  }

}
