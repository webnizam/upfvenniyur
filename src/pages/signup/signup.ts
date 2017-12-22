import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";

import { TabsPage } from "../tabs/tabs";
import { RestProvider } from "../../providers/rest/rest";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { Toast } from "@ionic-native/toast";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  errorMessage: string;
  data: string;
  result: any;
  name: string;
  fam_name: string;
  place: string;
  profession: string;
  dob: string;
  emirates: string;
  mobile: string;
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public formBuilder: FormBuilder,
    public storage: Storage,
    private toast: Toast,
    public loadingCtrl: LoadingController
  ) {
    this.registerForm = formBuilder.group({
      name: ["", Validators.compose([Validators.required])],
      fam_name: ["", Validators.compose([Validators.required])],
      place: ["", Validators.compose([Validators.required])],
      profession: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])],
      mobile: ["", Validators.compose([Validators.required])],
      emirates: ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  async register() {
    if (this.registerForm.valid) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });

      loading.present();

      console.log("register");
      this.data =
        '{"name" : "' +
        this.name +
        '", "fam_name" : "' +
        this.fam_name +
        '", "place" : "' +
        this.place +
        '", "profession" : "' +
        this.profession +
        '", "mob" : "' +
        this.mobile +
        '", "dob" : "' +
        this.dob +
        '", "emirates" : "' +
        this.emirates +
        '"}';
      console.log(this.data);
      // this.navCtrl.push(TabsPage);
      this.rest.register(this.data).subscribe(
        result => {
          loading.dismiss();
          this.result = result;
          console.log("result :" + JSON.stringify(result));
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
            console.log("Error : " + JSON.stringify(this.result));
            // this.toast
            //   .show(this.result.message, "3000", "center")
            //   .subscribe(toast => {
            //     console.log(toast);
            //   });
          }
        },
        error => {
          loading.dismiss();
          this.errorMessage = <any>error;
          console.log("Error : " + JSON.stringify(this.errorMessage));
          // this.toast
          //   .show(this.errorMessage, "3000", "center")
          //   .subscribe(toast => {
          //     console.log(toast);
          //   });
        }
      );
    } else {
      alert("WTF Man");
      // this.toast
      // .show('All fields are mandatory', "3000", "center")
      // .subscribe(toast => {
      //   console.log(toast);
      // });
    }
  }
}
