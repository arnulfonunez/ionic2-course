import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //protected rootPage: any = TabsPage;
  protected tabsPage: any = TabsPage;
  protected settingsPage: any = SettingsPage;
  @ViewChild('nav') navController: NavController;


  constructor(platform: Platform, private menuController: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

protected onLoad(page: any): void{
this.navController.setRoot(page)  ;
this.menuController.close();
}

}
