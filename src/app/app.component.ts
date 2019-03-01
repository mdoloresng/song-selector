import { Component } from '@angular/core';
import { Song } from './song/song.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  
export class AppComponent {
    songs: Song[];

    constructor(){
      this.songs = [
        new Song('The Son of a Preacher Man', 'https://www.youtube.com/watch?v=DjydOI4MEIw', 3),
        new Song('Love Me Tender', 'https://www.youtube.com/watch?v=-Y-bd3aDMGA', 2),
        new Song('Send My Love', 'https://www.youtube.com/watch?v=fk4BbF7B29w', 1),
      ];
      }
      
      addSong(title: HTMLInputElement, link: HTMLInputElement): boolean {
         console.log(`Adding song title: ${title.value} and link: ${link.value}`);
        this.songs.push(new Song(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
         }
  }
  