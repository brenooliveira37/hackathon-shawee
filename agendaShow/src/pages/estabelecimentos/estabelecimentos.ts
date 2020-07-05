import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EstabelecimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-estabelecimentos",
  templateUrl: "estabelecimentos.html",
})
export class EstabelecimentosPage {
  estabelecimentos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.api.getEstabelecimentos().then((resp: any) => {
      this.estabelecimentos = resp;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EstabelecimentosPage");
  }

  openEstabelecimento(id){
    
  }
}
