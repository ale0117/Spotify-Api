import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string = '';
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  clicked:string;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    //Added lines 29 and 30 to make search work when going back to previous page and having input
    this.searchString = (<HTMLInputElement>document.getElementById("sString")).value;
    this.searchCategory = (<HTMLInputElement>document.getElementById("sCategory")).value;
    if (this.searchString != '') {
      this.spotify.searchFor(this.searchCategory, this.searchString).then((data) => {
        this.resources = data;
        this.clicked = this.searchCategory;
      })
    }
  }
}
