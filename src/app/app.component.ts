import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { Storage } from "@ionic/storage";
import { TabsPage } from "../pages/tabs/tabs";
import { Tab } from "ionic-angular/components/tabs/tab";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.get("mobile").then(val => {
        if (val) {
          console.log("TabsPage");
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
          console.log("LoginPage");
        }
      });
    });
  }
}
