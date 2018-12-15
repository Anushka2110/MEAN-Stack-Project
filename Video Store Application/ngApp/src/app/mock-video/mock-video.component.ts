import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
//import {VideoService} from './../video.service';

@Component({
  selector: 'app-mock-video',
  templateUrl: './mock-video.component.html',
  styleUrls: ['./mock-video.component.css']
  
})
export class MockVideoComponent implements OnInit {

  videos: Video[]=[
    {"_id":"eg34tgqqtf", "id": 1, "title": 'Mr. Nice', "genre": 'fantasy', "runtime": '120 minutes', "status":"available", "rating":"5", "director": "xyx" },
    {"_id":"eg34tcxvtf", "id": 2, "title": 'Narco' , "genre": 'fantasy', "runtime": '120 minutes', "status":"unavailable", "rating":"5", "director": "xyx" },
    {"_id":"eg3dsdvgtf", "id": 3, "title": 'Bombasto', "genre": 'fantasy', "runtime": '120 minutes', "status":"available", "rating":"5", "director": "xyx" },
];

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video:any){
    this.selectedVideo= video;
    console.log(this.selectedVideo);
  }

}


/*
@Component({
  selector: 'app-mock-video',
  templateUrl: './mock-video.component.html',
  styleUrls: ['./mock-video.component.css'],
  providers: [VideoService]
})
export class MockVideoComponent implements OnInit {
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