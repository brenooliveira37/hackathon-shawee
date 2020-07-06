import { EstabelecimentosPage } from "./../pages/estabelecimentos/estabelecimentos";
import { EventosPage } from "./../pages/eventos/eventos";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ViewChild } from "@angular/core";
import { Nav } from "ionic-angular";

import { PrincipalPage } from "../pages/principal/principal";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = PrincipalPage;

  principalPage = PrincipalPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openEventos() {
    // this.navCtrl.push(EventosPage);
    this.nav.setRoot(EventosPage);
    this.nav.popToRoot();
  }

  openEstabelecimentos() {
    // this.navCtrl.push(EstabelecimentosPage);
    this.nav.setRoot(EstabelecimentosPage);
    this.nav.popToRoot();
  }
}
