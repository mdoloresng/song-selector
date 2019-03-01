import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Song } from './song.model';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() song: Song;

  constructor() {
    
   }

   voteUp() : boolean {
     this.song.voteUp();
     return false;
   }

   voteDown() : boolean {
     this.song.voteDown();
     return false;
   }

  ngOnInit() {
  }

}
