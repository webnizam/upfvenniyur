import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-team",
  templateUrl: "team.html"
})
export class TeamPage {
  profile: any;
  name: string;
  userType: string;
  place: string;
  mobile: string;
  emirate: string;
  profession: string;
  dob: string;
  familyName: string;
  role: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.data;
    console.log(this.profile);
  }

  async ionViewDidLoad() {
    console.log("ionViewDidLoad TeamPage");
    this.name = this.profile.name;
    this.userType = this.profile.user_type;
    this.place = this.profile.place;
    this.mobile = this.profile.mob;
    this.emirate = this.profile.emirates;
    this.profession = this.profile.prof;
    this.familyName = this.profile.fam_name;
    this.role = this.profile.role;
    this.dob = this.profile.dob;
  }
}
