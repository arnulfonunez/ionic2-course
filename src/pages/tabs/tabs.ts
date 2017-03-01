import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

public favoritesPage: any = FavoritesPage;
public libraryPage: any = LibraryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
