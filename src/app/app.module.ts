import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CrudService } from './shared/crud.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductsListComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPQFW5mYNhOrNr98qqxfV9gcy7uxIv9Zc'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFirestoreModule, // Only required for database features
    AngularFireDatabaseModule,
    AngularFireStorageModule, // Only required for storage features
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
