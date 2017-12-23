import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public contents = [];

  data: string;
  result: any;
  errorMessage: any;

  constructor(
    public navCtrl: NavController,
    public rest: RestProvider,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    storage.get("id").then(val => {
      this.data = '{"userid" :"' + val + '"}';
      console.log(this.data);
      this.rest.getHomeContent(this.data).subscribe(
        result => {
          loading.dismiss();
          this.result = result;
          console.log(result);

          if (this.result.code == "1") {
            this.contents = this.result.data;
          } else {
          }
        },
        error => {
          loading.dismiss();
          this.errorMessage = error;
        }
      );
    });
  }

  ionViewDidLoad() {
    let date = new Date().toISOString();
    console.log(new Date(date));
  }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
