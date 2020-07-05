import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EstabelecimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-estabelecimento",
  templateUrl: "estabelecimento.html",
})
export class EstabelecimentoPage {
  estabelecimento: any;
  id: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.id = this.navParams.get("id");
    this.api.getEstabelecimento(this.id).then((resp: any) => {
      this.estabelecimento = resp;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EstabelecimentoPage");
  }
}
