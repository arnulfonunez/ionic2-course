import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit{

  //protected altBackground: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonService: CommonService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

protected onToggle(toggle: Toggle): void{
    this.commonService.setAlternativeBackgroundToggled(toggle.checked);
}

ngOnInit(){
//this.altBackground = this.commonService.getAlternativeBackgroundToggled();
}

protected getAltBackgroundToggle(): boolean{
  return this.commonService.getAlternativeBackgroundToggled();
}

}
