import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculation-field',
  templateUrl: './calculation-field.component.html',
  styleUrls: ['./calculation-field.component.scss'],
})
export class CalculationFieldComponent implements OnInit {

  @Input() result: number;

  constructor() { }

  ngOnInit() {}

}
