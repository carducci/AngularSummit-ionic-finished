import { Component, OnInit } from '@angular/core';
import sessionData from "../../data/sessions";
import {ISession} from "../../data/session.interface";
import {Session} from "../session/session";
import {ConfAgendaService} from "../../services/confAgendaService";
import {Haptic} from "ionic-angular";
import {SettingsService} from "../../services/settings";
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class Schedule implements OnInit{
  sessionCollection: ISession[];
  sessionDetail = Session;
  constructor(private confAgendaService: ConfAgendaService,
              private haptic: Haptic,
              private settingsService: SettingsService){}
  ngOnInit(){
    this.sessionCollection = sessionData.sort((leftSide,rightSide): number => {
      if(leftSide.startTime < rightSide.startTime) return -1;
      if(leftSide.startTime > rightSide.startTime) return 1;
      return 0;
    })
  }
  isOnAgenda(session: ISession){
    return this.confAgendaService.isOnAgenda(session);
  }

  onAddToAgenda(session: ISession) {
    this.confAgendaService.addSessionToAgenda(session);
    this.haptic.notification({type:'success'});
  }

  onRemoveFromAgenda(session: ISession) {
    this.confAgendaService.removeSessionFromAgenda(session);
    this.haptic.notification({type:'success'});
  }

  getBackground(session:ISession){
    if(this.confAgendaService.isOnAgenda(session)
        && this.settingsService.getHighlightSetting())
    {
      return "highlight";
    }
    return "";
  }


}
