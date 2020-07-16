export interface IAlertMessage {
  param?: string;
  msg: string;
  value?: string;
}

export interface IAlert {
  id: string;
  msg: string;
  type: string;
}
