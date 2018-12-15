import { Component, OnInit, EventEmitter } from '@angular/core';
//import {VideoService} from './../video.service';
import {Video} from './../video';
/*
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);

  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:['videos'],
  outputs:['SelectVideo']
})
export class HomeComponent implements OnInit {
  
  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  onSelect(vid: Video){
    this.SelectVideo.emit(vid);
  }

}
