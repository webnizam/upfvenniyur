import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { HomePage } from "../pages/home/home";
import { EventsPage } from "../pages/events/events";
import { CommitteePage } from "../pages/committee/committee";
import { TabsPage } from "../pages/tabs/tabs";
import { ProfilePage } from "../pages/profile/profile";
import { AddeventPage } from "../pages/addevent/addevent";
import { RestProvider } from "../providers/rest/rest";
import { IonicStorageModule } from "@ionic/storage";
import { Toast } from "@ionic-native/toast";
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    EventsPage,
    CommitteePage,
    TabsPage,
    ProfilePage,
    AddeventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    EventsPage,
    CommitteePage,
    TabsPage,
    ProfilePage,
    AddeventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    Toast,
    Camera
  ]
})
export class AppModule {}
