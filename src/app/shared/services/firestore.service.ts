import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Sushi } from '../sushi';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  items: Observable<Sushi[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) { }   // Inject AngularFireDatabase dependency in constructor


  getSushiList() {
    this.itemsCollection = this.afs.collection<Sushi>('sushi');
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  addSushi(sushiItem: Sushi) {
    // Persist a document id
    const id = this.afs.createId();
    const item = { id, ...sushiItem };
    this.itemsCollection.doc(id).set(item);
  }
}
