import { QuotePage } from '../quote/quote';
import { ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit{

public quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService,
  private modalController: ModalController) {}

ngOnInit(){
  //this.quotes = this.quoteService.getFavoriteQuote();
}

ionViewWillEnter(){
  this.quotes = this.quoteService.getFavoriteQuote();
}

onViewQuote(quote: Quote): void{
 let modal = this.modalController.create(QuotePage);
 modal.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
