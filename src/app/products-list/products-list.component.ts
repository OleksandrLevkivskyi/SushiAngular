import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  testUser: User = {
    name: 'andrii',
    email: 'roobot@i.ua',
    contact: 100
  };

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    console.log('add User');
    // this.crudService.AddUser(this.testUser);
  }

}
