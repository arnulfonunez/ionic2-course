import { QuotesService } from '../../services/quotes.service';
import { AlertController } from 'ionic-angular';
import { QuoteBean } from '../../data/quotebean.interface';
import { Quote } from '../../data/quotes.interface';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

   public quoteItem: QuoteBean= null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
   private quoteService: QuotesService) {}


  ngOnInit(){
    this.quoteItem = this.navParams.data;
  }


onAddToFavorite(selectedQuote: Quote):void{
  //Ask user if adding quote to onAddToFavorite
  //Add quote to onAddToFavorite
  let alert = this.alertCtrl.create({
    title: 'Add Quote to Favorite',
    subTitle: '',
    message: 'Do you want to add quote to favorite?',
    buttons:[
      {
        text: 'Yes',
        handler: () => { this.quoteService.addQuoteToFavorite(selectedQuote);}
      }
      ,{
        text: 'No',
        role:'cancel',
        handler: () => {console.log('No selected');}
      }
    ]
  });

  alert.present();
}


  ionViewDidLoad() {
    // this.quoteItem = this.navParams.data;
  }

}
