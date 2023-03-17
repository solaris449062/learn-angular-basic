import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  userName: string = '';


  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      }
    , 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  setUserName(name:string) {
    this.userName = name;
  }
  // onUpdateServerName(event: any) {
  //   // this.serverName = event.target.value; // less desirable because it would only work when it's input
  //   this.serverName = (<HTMLInputElement>event.target).value
  // }



}
