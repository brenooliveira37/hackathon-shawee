import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-evento",
  templateUrl: "evento.html",
})
export class EventoPage {
  evento: any;
  id: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.id = this.navParams.get("id");
    this.api.getEvento(this.id).then((resp: any) => {
      this.evento = resp;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventoPage");
  }
}
