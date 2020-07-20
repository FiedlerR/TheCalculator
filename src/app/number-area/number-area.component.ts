import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-area',
  templateUrl: './number-area.component.html',
  styleUrls: ['./number-area.component.scss'],
})
export class NumberAreaComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {}

  buttonClick(button: string){
    this.buttonClicked.emit(button);
  }
  

}
