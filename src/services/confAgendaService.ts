import {ISession} from "../data/session.interface";
import {EventEmitter} from "@angular/core";
export class ConfAgendaService{
  private mySessions: ISession[] = [];
  public addAgendaItem: EventEmitter<any>;
  public deleteAgendaItem: EventEmitter<any>;

  constructor() {
    this.addAgendaItem = new EventEmitter();
    this.deleteAgendaItem = new EventEmitter();
  }

  addSessionToAgenda(session: ISession){
    const position = this.mySessions.findIndex((sessionEl: ISession) => {
      return sessionEl.startTime ==session.startTime;
    });
    if(position!=-1){
      this.mySessions.splice(position,1);
      this.deleteAgendaItem.emit();
    }
    this.mySessions.push(session);
    this.addAgendaItem.emit();
  }

  removeSessionFromAgenda(session:ISession){
    const position = this.mySessions.findIndex((sessionEl: ISession) => {
      return sessionEl.id==session.id;
    });
    this.mySessions.splice(position,1);
    this.deleteAgendaItem.emit();
  }

  getMySessions() {
    return this.mySessions.slice();
  }

  isOnAgenda(session: ISession) {
    return this.mySessions.find((sessionEl: ISession)=> {
      return sessionEl.id==session.id;
    });
  }
}
