import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Schedule', component: SideSchedulePage },
      { title: 'Portfolio', component: SidePortfolioPage },
      { title: 'Payment', component: SidePaymentPage },
      { title: 'Portfolio', component: SidePortfolioPage },
      { title: 'Setting', component: SideSettingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
