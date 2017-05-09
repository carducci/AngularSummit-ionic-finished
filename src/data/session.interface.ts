export interface ISession{
  id: number;
  speakerNames: string;
  speakerImage: string;
  workshop:boolean,
  title:string;
  summary:string;
  detail:string;
  workshopRequirements:string;
  roomName:string;
  startTimeString:string;
  startTime:string;
  endTime:string;
}
