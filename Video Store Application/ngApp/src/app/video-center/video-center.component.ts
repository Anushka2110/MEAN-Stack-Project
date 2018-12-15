import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[]=[
    {"_id":"eg34tgqqtf", "id": 4, "title": 'Mr. Nice', "genre": 'fantasy', "runtime": '120 minutes', "status":"available", "rating":"5", "director": "xyx" },
    {"_id":"eg34tcxvtf", "id": 5, "title": 'Narco' , "genre": 'fantasy', "runtime": '120 minutes', "status":"unavailable", "rating":"5", "director": "xyx" },
    {"_id":"eg3dsdvgtf", "id": 6, "title": 'Bombasto', "genre": 'fantasy', "runtime": '120 minutes', "status":"available", "rating":"5", "director": "xyx" },
];

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video:any){
    this.selectedVideo= video;
    console.log(this.selectedVideo);
  }

  addVideo(){}

}
