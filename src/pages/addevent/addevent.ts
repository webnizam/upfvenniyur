import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Toast } from "@ionic-native/toast";
import { RestProvider } from "../../providers/rest/rest";
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addevent",
  templateUrl: "addevent.html"
})
export class AddeventPage {
  errorMessage: string;
  data: string;
  result: any;
  title: string;
  description: string;
  date: string;
  time: string;
  addEventForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private toast: Toast,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public camera : Camera
  ) {
    this.addEventForm = formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
      date: ["", Validators.compose([Validators.required])],
      time: ["", Validators.compose([Validators.required])]
    });
  }

  submitEvent(formValue): void {
    console.log("Submit clicked");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddeventPage");
  }
}
