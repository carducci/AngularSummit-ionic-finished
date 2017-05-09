export class SettingsService{
  highlight = false;

  constructor(){
  }

  toggleHighlight(status:boolean){
    this.highlight = status;
  }

  getHighlightSetting(){
    return this.highlight;
  }
}
