import { Component, OnInit } from '@angular/core';
import { Media,MediaObject } from '@ionic-native/media/ngx';
import {File} from '@ionic-native/file/ngx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  recording:boolean=false;
  filepath:string;
  filename:string;
  audio:MediaObject;
  audioList:any[]=[];
  constructor(
    private media:Media,
    public file:File,
    private router:Router
    ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/login'])
  }
  
  getAudioList(){
    if(localStorage.getItem("audioList")){
      this.audioList = JSON.parse(localStorage.getItem("audioList"));
    }
  };
  ionViewWillEnter(){
    this.getAudioList()
  };

  startRecord(){
    this.filename = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+
    new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+new Date().getMilliseconds();
    this.audio = this.media.create(this.filename);
    this.audio.startRecord();
    status="Recording...."
    this.recording=true
    console.log(this.recording)
  };

  stopRecord(){
    this.stopRecord();
    status="stopped"
    let data={filename:this.filename};
    this.audioList.push(data);
    localStorage.setItem('audioList',JSON.stringify(this.audioList));
    this.recording=false;
    this.getAudioList();
    console.log(this.recording)
  };

  playAudio(file,idx){
    this.filepath=this.file.externalDataDirectory.replace(/file:\/\//g, '')+file;
    this.audio.play();
  }
}
