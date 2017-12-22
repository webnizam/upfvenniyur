import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AddeventPage } from "../addevent/addevent";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-events",
  templateUrl: "events.html"
})
export class EventsPage {
  public events = [
    {
      heading: "General Body",
      date: "November 20, 2017",
      image:
        "https://www.newstatesman.com/sites/all/themes/creative-responsive-theme/images/new_statesman_events.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    },
    {
      heading: "National Day",
      date: "December 2, 2017",
      image:
        "https://www.souqalmal.com/financial-education/ae-en/uploads/sites/8/2014/11/UAE-National-Day-parade-in-Downtown-Dubai-2.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    },
    {
      heading: "National Day",
      date: "December 2, 2017",
      image:
        "https://www.souqalmal.com/financial-education/ae-en/uploads/sites/8/2014/11/UAE-National-Day-parade-in-Downtown-Dubai-2.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    },
    {
      heading: "National Day",
      date: "December 2, 2017",
      image:
        "https://www.souqalmal.com/financial-education/ae-en/uploads/sites/8/2014/11/UAE-National-Day-parade-in-Downtown-Dubai-2.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    },
    {
      heading: "National Day",
      date: "December 2, 2017",
      image:
        "https://www.souqalmal.com/financial-education/ae-en/uploads/sites/8/2014/11/UAE-National-Day-parade-in-Downtown-Dubai-2.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    },
    {
      heading: "National Day",
      date: "December 2, 2017",
      image:
        "https://www.souqalmal.com/financial-education/ae-en/uploads/sites/8/2014/11/UAE-National-Day-parade-in-Downtown-Dubai-2.jpg",
      description:
        "Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:"
    }
  ];

  isAdmin: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.storage.get("user_type").then(val => {
      if (val == "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventsPage");
  }

  addEvent(): void {
    this.navCtrl.push(AddeventPage);
  }
}
