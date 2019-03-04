import { Component, OnInit, Input } from '@angular/core';
import { Sushi } from '../shared/sushi';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() sushiList: Sushi[];

  constructor() { }

  ngOnInit() {
  }

}
