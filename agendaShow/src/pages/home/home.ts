import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { PerfilPage } from "../perfil/perfil";
import { EventoPage } from "../evento/evento";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav:Nav;



  constructor(public navCtrl: NavController) {

  }

  openPerfil() {
    this.navCtrl.setRoot (PerfilPage);
    this.navCtrl.popToRoot ();
  }

  openEvento() {
    this.navCtrl.setRoot (EventoPage);
    this.navCtrl.popToRoot ();
  }

}

