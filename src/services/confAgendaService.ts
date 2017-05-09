import {ISession} from "../data/session.interface";
export class ConfAgendaService{
  private mySessions: ISession[] = [];

  addSessionToAgenda(session: ISession){
    const position = this.mySessions.findIndex((sessionEl: ISession) => {
      return sessionEl.startTime ==session.startTime;
    });
    if(position!=-1){
      this.mySessions.splice(position,1);
    }
    this.mySessions.push(session);
    console.log(this.mySessions);
  }

  removeSessionFromAgenda(session:ISession){
    const position = this.mySessions.findIndex((sessionEl: ISession) => {
      return sessionEl.id==session.id;
    })
    this.mySessions.splice(position,1);
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
