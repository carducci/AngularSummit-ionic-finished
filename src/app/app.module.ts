import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {Agenda} from "../pages/agenda/agenda";
import {Schedule} from "../pages/schedule/schedule";
import {Session} from "../pages/session/session";
import {Tabs} from "../pages/tabs/tabs";
import {ConfAgendaService} from "../services/confAgendaService";
import {Settings} from "../pages/settings/settings";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    Agenda,
    Schedule,
    Session,
    Tabs,
    Settings
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Agenda,
    Schedule,
    Session,
    Tabs,
    Settings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfAgendaService,
    SettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
