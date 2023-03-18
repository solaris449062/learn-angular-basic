import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  private _serverCreationStatus: string = 'No server was created!';
  private _allowNewServer: boolean = false;
  private _serverName: string = '';
  private _userName: string = '';
  private _servers: Array<String> = [];
  private _logs: Array<String> = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.servers.push(this.serverName);
  }

  logActivity(): void {
    this.logs.push(new Date() + " activity logged.")
  }

  public get userName(): string {
    return this._userName;
  }

  public set userName(value: string) {
    this._userName = value;
  }

  public get serverName(): string {
    return this._serverName;
  }

  public set serverName(value: string) {
    this._serverName = value;
  }

  public get allowNewServer(): boolean {
    return this._allowNewServer;
  }

  public set allowNewServer(value: boolean) {
    this._allowNewServer = value;
  }

  public get serverCreationStatus(): string {
    return this._serverCreationStatus;
  }

  public set serverCreationStatus(value: string) {
    this._serverCreationStatus = value;
  }

  public get servers(): Array<String> {
    return this._servers;
  }

  public set servers(value: Array<String>) {
    this._servers = value;
  }

  public get logs(): Array<String> {
    return this._logs;
  }

  public set logs(value: Array<String>) {
    this._logs = value;
  }
}