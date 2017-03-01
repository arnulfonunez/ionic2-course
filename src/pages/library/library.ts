import { QuotesPage } from '../quotes/quotes';
import { QuoteBean } from '../../data/quotebean.interface';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{

  //To declare the quotes variable start
  public quoteCollection: QuoteBean[];
  public quotesPage: any = QuotesPage;
  //Or 
  //public quoteCollection : {category: string, quotes: Quote[], icon: string}
  //To declare the quotes variable end

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.quoteCollection = quotes;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
