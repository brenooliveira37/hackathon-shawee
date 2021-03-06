import { EventoPage } from "./../evento/evento";
import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-eventos",
  templateUrl: "eventos.html",
})
export class EventosPage {
  eventos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.api.getEventos().then((resp: any) => {
      this.eventos = resp;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  openEvento(id) {
    this.navCtrl.push(EventoPage, { id: id });
  }
}
