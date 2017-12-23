import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { PosteventPage } from "../postevent/postevent";
import { Storage } from "@ionic/storage";
import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-events",
  templateUrl: "events.html"
})
export class EventsPage {
  public events = [];

  isAdmin: boolean;
  userId: string;
  errorMessage: string;
  data: string;
  result: any;

  descending: boolean = false;
  order: number;
  column: string = "date";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public rest: RestProvider,
    public loadingCtrl: LoadingController
  ) {
    this.storage.get("user_type").then(val => {
      if (val == "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
    this.storage.get("id").then(val => {
      this.userId = val;
      this.data = '{"userid" : "' + this.userId + '"}';
      this.loadEvents();
    });
  }

  async loadEvents() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.rest.getEvents(this.data).subscribe(
      result => {
        loading.dismiss();
        this.result = result;
        console.log("Result : " + JSON.stringify(this.result));
        if (this.result.code == "1") {
          this.events = this.result.data;
        } else {
        }
      },
      error => {
        loading.dismiss();
        this.errorMessage = error;
      }
    );
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter EventsPage");
    this.loadEvents();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventsPage");
    //this.loadEvents();
  }

  addEvent(): void {
    this.navCtrl.push(PosteventPage);
  }

  parseDate(date): string {
    return new Date(date).toDateString();
  }

  toggleLike(id, index): void {
    console.log(index + " Like Clicked");
    if (this.events[index].is_like == 1) {
      this.events[index].is_like = 0;
      this.events[index].likes = this.events[index].likes - 1;
    } else {
      this.events[index].is_like = 1;
      this.events[index].likes = this.events[index].likes + 1;
    }

    var likeData =
      '{"userid" : "' + this.userId + '", "eventId" : "' + id + '"}';
    console.log(likeData);
    this.rest.toggleLike(likeData).subscribe(
      result => {
        console.log(result);
      },
      error => {}
    );
  }
}
