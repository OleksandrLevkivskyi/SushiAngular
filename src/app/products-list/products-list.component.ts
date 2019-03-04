import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { Sushi } from '../shared/sushi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  $sushiList: Observable<Sushi[]>;

  sushi: Sushi = {
    description: '',
    name: '',
    img: '',
    price: 0,
    portion: 0,
    sauce: 0,
    count: 0,
    popularity: 0
  };

  constructor(private fsService: FirestoreService) { }

  ngOnInit() {
    this.$sushiList = this.fsService.getSushiList();
  }

  addSushi() {
    this.fsService.addSushi(this.sushi);
    console.log('sushi add');
  }
}
