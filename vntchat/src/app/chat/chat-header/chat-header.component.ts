import { ChatService } from '../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public user: string;
  public logTime: Date;
  public typedUsername = '';

  constructor(private _chatService: ChatService) {
    this.fillUserInfo();
  }

  ngOnInit() {
  }

  private fillUserInfo(): void {
    this.user = this._chatService.username;
    this.logTime = this._chatService.loggedTime;
  }

  private clearUserInfo(): void {
    this.user = null;
    this.logTime = null;
  }

  public logout(): void {
    this._chatService.logOut();
    this.clearUserInfo();
  }

  public login(): void {
    this._chatService.logIn(this.typedUsername);
    this.fillUserInfo();
    this.typedUsername = '';
  }
}
