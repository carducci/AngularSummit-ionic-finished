import {Component} from "@angular/core";
import {Agenda} from "../agenda/agenda";
import {Schedule} from "../schedule/schedule";
import {ConfAgendaService} from "../../services/confAgendaService";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="agenda" tabTitle="My Agenda" tabIcon="list" tabBadge="{{agendaCount}}" tabBadgeStyle="danger"></ion-tab>
      <ion-tab [root]="schedule" tabTitle="Schedule" tabIcon="calendar"></ion-tab>
    </ion-tabs>
  `
})
export class Tabs {
  agenda = Agenda;
  schedule =  Schedule;
  private agendaCount: number = 0;

  constructor(private agendaService: ConfAgendaService) {
    let that = this;
    this.agendaService.addAgendaItem.subscribe(() => {
      that.agendaCount++;

    });

    this.agendaService.deleteAgendaItem.subscribe(() => {
      that.agendaCount--;
    });
  }
}
