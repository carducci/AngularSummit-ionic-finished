import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";
import {SettingsService} from "../../services/settings";
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor(private settingsService:SettingsService){}
  onToggle(toggle: Toggle){
    console.log(toggle);
    this.settingsService.toggleHighlight(toggle.checked);
  }

  checkHighlight(){
    return this.settingsService.getHighlightSetting();
  }
}
