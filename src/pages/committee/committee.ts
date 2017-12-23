import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from "@ionic/storage";
import { TeamPage } from "../team/team";

/**
 * Generated class for the CommitteePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-committee",
  templateUrl: "committee.html"
})
export class CommitteePage {
  result: any;
  errorMessage: any;
  data: string;

  public members = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    private storage: Storage
  ) {
    this.storage.get("id").then(val => {
      this.data = '{"userid" :"' + val + '"}';
      this.loadMembers();
    });
  }

  loadMembers(): void {
    this.rest.getCommittee(this.data).subscribe(
      result => {
        this.result = result;
        if (this.result.code == "1") {
          console.log(this.result);
          this.members = this.result.data;
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  openPage(member): void {
    this.navCtrl.push(TeamPage, member);
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter EventsPage");
    this.loadMembers();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteePage");
  }
}
