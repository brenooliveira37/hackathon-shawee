import { EstabelecimentosPage } from './../estabelecimentos/estabelecimentos';
import { EventosPage } from './../eventos/eventos';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-principal",
  templateUrl: "principal.html",
})
export class PrincipalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openEventos() {
    // this.navCtrl.push(EventosPage);
    this.navCtrl.setRoot (EventosPage);
    this.navCtrl.popToRoot();
  }

  openEstabelecimentos() {
    // this.navCtrl.push(EstabelecimentosPage);
    this.navCtrl.setRoot (EstabelecimentosPage);
    this.navCtrl.popToRoot();
  }
}
