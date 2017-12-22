import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";

import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from "@ionic/storage";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Toast } from "@ionic-native/toast";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  errorMessage: string;
  data: string;
  result: any;
  dob: string;
  mobile: string;
  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public storage: Storage,
    public formBuilder: FormBuilder,
    private toast: Toast,
    public loadingCtrl: LoadingController
  ) {
    this.loginForm = formBuilder.group({
      mobile: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  async login() {
    if (this.loginForm.valid) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });

      loading.present();
      this.data = '{"mob" : "' + this.mobile + '", "dob" : "' + this.dob + '"}';
      console.log(this.data);
      this.rest.login(this.data).subscribe(
        result => {
          loading.dismiss();
          this.result = result;
          console.log("response : " + JSON.stringify(result));
          if (this.result.code == "1") {
            this.storage.set("mobile", this.result.data.mob);
            this.storage.set("dob", this.result.data.dob);
            this.storage.set("id", this.result.data.id);
            this.storage.set("user_type", this.result.data.user_type);
            this.storage.set("name", this.result.data.name);
            this.storage.set("fam_name", this.result.data.fam_name);
            this.storage.set("emirates", this.result.data.emirates);
            this.storage.set("place", this.result.data.place);
            this.storage.set("profession", this.result.data.profession);

            this.navCtrl.push(TabsPage);
          } else {
            // this.toast
            //   .show(this.result.message, "3000", "center")
            //   .subscribe(toast => {
            //     console.log(toast);
            //   });
            console.log(this.result.message);
          }
        },
        error => {
          loading.dismiss();
          this.errorMessage = <any>error;
          console.log("Error : " + this.errorMessage);
          // this.toast
          //   .show(this.errorMessage, "3000", "center")
          //   .subscribe(toast => {
          //     console.log(toast);
          //   });
        }
      );
    } else {
      alert("WTF Man");
    }
  }

  register(): void {
    console.log("register");
    this.navCtrl.push(SignupPage);
  }
}
