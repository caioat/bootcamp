import { ChatService } from './chat.service';
import { Component, AfterViewChecked, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

  public messages: Object[] = [];
  public typedMessage = '';

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {

  }

  ngAfterViewInit() {
    this.checkServerReceiver();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.checkServerReceiver();
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public sendMessage(): void {
    const obj = {
      message: this.typedMessage,
      author: this._chatService.username
    };

    this._chatService.server.emit('messages', obj);

    this.typedMessage = '';
  }

  public onKeyDown(keyboardEvent: KeyboardEvent): void {
    if (keyboardEvent.keyCode === 13 && keyboardEvent.shiftKey === false) {
      console.log(keyboardEvent);
      this.sendMessage();
    }
  }

  public onKeyUp(keyboardEvent: KeyboardEvent): void {
    if (keyboardEvent.keyCode === 13 && keyboardEvent.shiftKey === false) {
      this.typedMessage = '';
    }
  }

  private checkServerReceiver() {
    if (this._chatService.server === null) {
      this.messages = [];
    } else if (this._chatService.connected === false) {
      this._chatService.server.on('messages', m => this.messages.push(m));
      this._chatService.connected = true;
    }
  }
}
