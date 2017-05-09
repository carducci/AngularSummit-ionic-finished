import {Component} from "@angular/core";
import {Agenda} from "../agenda/agenda";
import {Schedule} from "../schedule/schedule";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="agenda" tabTitle="My Agenda" tabIcon="list"></ion-tab>
      <ion-tab [root]="schedule" tabTitle="Schedule" tabIcon="calendar"></ion-tab>
    </ion-tabs>
  `
})
export class Tabs {
  agenda = Agenda;
  schedule =  Schedule;
}
