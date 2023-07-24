import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //이벤트 방출자
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //이벤트 방출자;
  newServerName = '';
  newServerContent = '';

  constructor() {
    
  }
  ngOnInit() {

  }

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    });
  }

}
