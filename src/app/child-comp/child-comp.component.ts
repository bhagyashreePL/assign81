import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

 public textMsg;

 //for to pass data chid componenet to app component
  @Output() public MyEvent = new EventEmitter();

  //Function for Child Click to get data from input
  public SendEvent()
  {
  // Send the event to parent
    this.MyEvent.emit(this.textMsg);
  }
  constructor() { }

  ngOnInit() {
  }

}
