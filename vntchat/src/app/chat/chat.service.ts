import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private user: string;
  private logTime: Date;
  private serverURL = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  //private serverURL: string = 'http://172.24.30.24:3000/';
  public server: any;
  public connected = false;

  private localStorageKeyName = 'name';
  private localStorageKeyLogTime = 'logTime';

  get username(): string {
    return this.user;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
    this.server = null;
    this.logIn('');
  }

  public logIn(typedUsername: string): void {
    if (!localStorage.getItem(this.localStorageKeyName)) {
      if (typedUsername != null && typedUsername.length > 0) {
        this.user = typedUsername;
        this.logTime = new Date();
        localStorage.setItem(this.localStorageKeyName, this.user);
        localStorage.setItem(this.localStorageKeyLogTime, this.logTime.toString());
      } else {
        return;
      }
    } else {
      this.user = localStorage.getItem(this.localStorageKeyName);
      this.logTime = new Date(localStorage.getItem(this.localStorageKeyLogTime));
    }

    this.server = io(this.serverURL);
  }

  public logOut(): void {
    localStorage.removeItem(this.localStorageKeyName);
    this.user = null;
    this.logTime = null;

    this.server.close();
    this.server = null;
    this.connected = false;
  }

}
