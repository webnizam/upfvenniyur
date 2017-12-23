import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Toast } from "@ionic-native/toast";
import { RestProvider } from "../../providers/rest/rest";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Storage } from "@ionic/storage";
import { DatePicker } from "@ionic-native/date-picker";

/**
 * Generated class for the PosteventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-postevent",
  templateUrl: "postevent.html"
})
export class PosteventPage {
  errorMessage: string;
  data: string;
  result: any;
  title: string;
  description: string;
  date: any;
  time: string;
  userId: string;
  postTime: string;
  place: string;
  addEventForm: FormGroup;
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private toast: Toast,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public camera: Camera,
    public storage: Storage,
    public datePicker: DatePicker
  ) {
    this.storage.get("id").then(val => {
      this.userId = val;
      console.log(val);
    });
    this.addEventForm = formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
      date: ["", Validators.compose([Validators.required])],
      // time: ["", Validators.compose([Validators.required])],
      place: ["", Validators.compose([Validators.required])]
    });
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  submitEvent(formValue): void {
    if (formValue) {
      this.loading.present();
      this.postTime = new Date().toISOString();

      this.data =
        '{"userid" : "' +
        this.userId +
        '", "title" : "' +
        this.title +
        '", "descr" : "' +
        this.description +
        '", "date": "' +
        this.date +
        " " +
        this.time +
        '", "post_date" : "' +
        this.postTime +
        '", "place" : "' +
        this.place +
        '"}';

      console.log(this.data);

      this.rest.addEvent(this.jsonEscape(this.data)).subscribe(
        result => {
          this.loading.dismiss();
          this.result = result;
          console.log("Result :" + JSON.stringify(result));
          if (this.result.code == "1") {
            this.navCtrl.pop();
          } else {
          }
        },
        error => {
          this.loading.dismiss();
          this.errorMessage = error;
          console.log("Error :" + JSON.stringify(error));
        }
      );
    } else {
      console.log("Please fill all the fields");
    }
  }

  jsonEscape(str): string {
    return str.replace(/\n/g, "\\n");
  }

  openDatePick(): void {
    this.datePicker
      .show({
        date: new Date(),
        mode: "datetime",
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      })
      .then(
        date => {
          this.date = date.toISOString();
        },
        err => console.log("Error occurred while getting date: ", err)
      );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PosteventPage");
  }
}
