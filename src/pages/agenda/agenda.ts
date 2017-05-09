import { Component } from '@angular/core';
import {ConfAgendaService} from "../../services/confAgendaService";
import {ISession} from "../../data/session.interface";
import {Session} from "../session/session";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class Agenda {
  myAgenda: ISession[];
  sessionDetail = Session;
  constructor(private confAgendaService: ConfAgendaService,
              private alertCtrl: AlertController){}

  ionViewWillEnter(){
    this.myAgenda = this.confAgendaService.getMySessions();
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
          this.myAgenda = this.confAgendaService.getMySessions();
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
