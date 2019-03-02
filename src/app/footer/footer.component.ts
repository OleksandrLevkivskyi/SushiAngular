import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  curentYear: string;

  constructor() { }

  ngOnInit() {
    this.getCurentYear();
  }

  getCurentYear() {
    const now = new Date();
    this.curentYear = now.getFullYear().toString();
  }

}
