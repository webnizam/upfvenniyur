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
import { PosteventPage } from "../pages/postevent/postevent";
import { TeamPage } from "../pages/team/team";
import { RestProvider } from "../providers/rest/rest";
import { IonicStorageModule } from "@ionic/storage";
import { Toast } from "@ionic-native/toast";
import { Camera } from "@ionic-native/camera";
import { SortPipe } from "../pipes/sort/sort";
import { DatePicker } from '@ionic-native/date-picker';

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
    PosteventPage,
    TeamPage,
    SortPipe
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
    PosteventPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    Toast,
    Camera,
    SortPipe,
    DatePicker
  ]
})
export class AppModule {}
