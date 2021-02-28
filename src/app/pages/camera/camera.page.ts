import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireStorage,AngularFireStorageReference} from '@angular/fire/storage';
import {AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  image:any;
  downloadURL:Observable<String>
  constructor(
    public router:Router,
    public afStorage:AngularFireStorage
  ) { }
  back(){
    this.router.navigate(['home'])
  }
  async upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task =this.ref.put(event.target.files[0]);
    this.downloadURL= await this.ref.getDownloadURL().toPromise();
  }
  ngOnInit() {
  }

}
