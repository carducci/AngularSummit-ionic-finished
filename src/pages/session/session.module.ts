import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Session } from './session';

@NgModule({
  declarations: [
    Session,
  ],
  imports: [
    IonicPageModule.forChild(Session),
  ],
  exports: [
    Session
  ]
})
export class SessionModule {}
