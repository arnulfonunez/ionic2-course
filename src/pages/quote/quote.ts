import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

onClose():void{
    this.viewController.dismiss();  
}

}