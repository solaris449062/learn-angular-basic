import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    private readonly _serverId: number;
    private readonly _serverStatus: boolean;

    constructor() {
        this._serverId = Math.floor(Math.random() * 100);
        this._serverStatus = Math.random() > 0.5;
    }


    public get serverId(): number {
        return this._serverId;
    }

    public get serverStatus(): boolean {
        return this._serverStatus;
    }

    public getStatusColor(): string {
        return this.serverStatus ? "green" : "red";
    }
}
