import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EventoPage } from "../pages/evento/evento";
import { PerfilPage } from "../pages/perfil/perfil";
import { PrincipalPage } from "../pages/principal/principal";
import { SiginPage } from "../pages/sigin/sigin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = PrincipalPage;

  homePage = HomePage;
  cadastroPage = CadastroPage;
  eventoPage = EventoPage;
  perfilPage = PerfilPage;
  principalPage = PrincipalPage;
  sigin = SiginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}