import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Select Exam',
        routerLink: '/exam'
      },
      {
        label: 'Sign in',
        routerLink: '/signin'
      },
      {
        label: 'Payment',
        routerLink: '/payment'
      },
      {
        label: 'Confirmation',
        routerLink: '/confirmation'
      }
    ];
  }

}
