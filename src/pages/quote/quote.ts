import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

 protected id: string = null;
 protected person: string = null;
 protected text: string = null;
 //protected selectedQuote: Quote  = null; //I can get the quote or the single fields. I'll use the single fields for practice

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {}


ionViewDidLoad(){
  this.id = this.navParams.get('id');
  this.person = this.navParams.get('person');
  this.text = this.navParams.get('text');
}

protected onClose(remove: boolean = false):void{
    this.viewController.dismiss(remove);  
}


}
