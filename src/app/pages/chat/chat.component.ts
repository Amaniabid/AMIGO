import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'] // ay sahiti
})
export class ChatComponent implements OnInit {
  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';

  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.fromEvent('message').subscribe((message: any) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.socket.emit('message', { sender: 'You', content: this.newMessage });
      this.newMessage = '';
    }
  }

 
}

