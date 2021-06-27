import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { CaptureAudioOptions, MediaCapture } from '@ionic-native/media-capture/ngx';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  captureAudLoc:'Audio/';
  result:any;
  audioURL
  constructor( 
  private mediaCaptue :MediaCapture,
  private storage: AngularFireStorage
  ) { }

  audioName(){
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
    }

  async captureAudio(){
    const options : CaptureAudioOptions ={
      limit:1
    }
    const result = await this.mediaCaptue.captureAudio(options);
    console.log(result)
  }
  ngOnInit() {
  }
}