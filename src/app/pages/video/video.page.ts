import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {CaptureVideoOptions,MediaCapture} from '@ionic-native/media-capture/ngx'
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  captureVideoLoc='videos/'
  videoURL:any
  result:any
  constructor(
    private mediaCapture:MediaCapture,
    private storage:AngularFireStorage
    ) { }
  
    videoName(){
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
    }
  async captureVideo(){
    const options : CaptureVideoOptions ={
      limit:1,
      duration:60
    }
    const result= await this.mediaCapture.captureVideo(options);
    const currentVideo = 'data:video/3gpp;base64'+result || 'data:video/quicktime;'+result
    const video = this.storage.ref(this.captureVideoLoc+"captured"+this.videoName())
    video
    .putString(currentVideo,'data_url')
    .then(() =>{
      video.getDownloadURL().subscribe((url:any) =>{
        this.videoURL = url
      })
    })
    console.log("uploaded successfully!")
    console.log(this.videoURL)
  }

  
  ngOnInit() {
  }

}
