import { ChatService } from '../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

  @Input() public mensagem: Object;

  constructor(private _chatService: ChatService) { }

  public selfMessage(): boolean {
    return this.mensagem['author'] === this._chatService.nomeUsuario;
  }
}
