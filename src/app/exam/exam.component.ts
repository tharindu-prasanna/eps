import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exams: any;

  constructor() {
    this.exams = [
      {name: 'Sri Lanka Administrative Service', code: 'SLAS'},
      {name: 'Sri Lanka Education Administrative Service', code: 'SLEAS'},
      {name: 'Sri Lanka Audit Service', code: 'SLAUS'},
      {name: 'Sri Lanka Account Service', code: 'SLACS'},
      {name: 'Sri Lanka Statistics Service', code: 'SLSS'}
    ];
  }

  ngOnInit(): void {
  }
}
