import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  name: string;
  userType: string;
  place: string;
  mobile: string;
  emirate: string;
  profession: string;
  dob: string;
  familyName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get("name").then(val => {
      this.name = this.capitalizeFirstLetter(val);
      console.log(val);
    });
    this.storage.get("dob").then(val => {
      this.dob = val;
      console.log(val);
    });
    this.storage.get("user_type").then(val => {
      this.userType = this.capitalizeFirstLetter(val);
      console.log(val);
    });
    // this.storage.get("profession").then(val => {
    //   this.profession = this.capitalizeFirstLetter(val);
    //   console.log(val);
    // });
    this.storage.get("emirates").then(val => {
      this.emirate = this.capitalizeFirstLetter(val);
      console.log(val);
    });
    this.storage.get("mobile").then(val => {
      this.mobile = val;
      console.log(val);
    });
    this.storage.get("fam_name").then(val => {
      this.familyName = this.capitalizeFirstLetter(val);
      console.log(val);
    });
    this.storage.get("place").then(val => {
      this.place = this.capitalizeFirstLetter(val);
      console.log(val);
    });
    console.log("ionViewDidLoad ProfilePage");
  }

  capitalizeFirstLetter(word): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
