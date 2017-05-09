import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Agenda } from './agenda';

@NgModule({
  declarations: [
    Agenda,
  ],
  imports: [
    IonicPageModule.forChild(Agenda),
  ],
  exports: [
    Agenda
  ]
})
export class AgendaModule {}
