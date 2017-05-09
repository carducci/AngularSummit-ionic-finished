import { Component } from '@angular/core';
import {ISession} from "../../data/session.interface";
import {AlertController, NavParams} from "ionic-angular";
import {ConfAgendaService} from "../../services/confAgendaService";

@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class Session  {
  sessionDetails: ISession;
  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private confAgendaService: ConfAgendaService){}

  ionViewDidLoad(){
    this.sessionDetails = this.navParams.data;
  }
  isOnAgenda(session: ISession){
    if(session===undefined)
      return false;
    return this.confAgendaService.isOnAgenda(session);
  }
  onAddToAgenda(selectedSession: ISession){
    const alert = this.alertCtrl.create({
      title: 'Add to Agenda',
      subTitle: selectedSession.title,
      message: 'Are you sure you want to add this session?',
      buttons: [{
        text: 'Aye!',
        handler: () => {
          this.confAgendaService.addSessionToAgenda(selectedSession);
        }
      },
        {
          text: 'NVM',
          role: 'cancel',
          handler: () => {
            console.log('nope')
          }
        }]
    });
    alert.present();
  }

  onRemoveFromAgenda(session: ISession){
    const alert = this.alertCtrl.create({
      title: 'Remove From Agenda',
      subTitle: session.title,
      message: 'Are you sure you want to remove this session?',
      buttons: [{
        text: 'Aye!',
        handler: () => {
          this.confAgendaService.removeSessionFromAgenda(session);

        }
      },
        {
          text: 'NVM',
          role: 'cancel',
          handler: () => {
            console.log('nope')
          }
        }]
    });
    alert.present();

  }




}
