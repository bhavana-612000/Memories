import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseUploadService } from './../../services/firebase-upload.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  currentImage: any;
  barStatus = false;
  uploads = [];
  
  constructor(
    public router:Router,
    private firebaseUploadService: FirebaseUploadService,
    private camera:Camera
  ) { }
  
  back(){
    this.router.navigate(['/login'])
  }
  uploadPhoto(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
        (res: any) => {
            if (res) {
                console.log(res);
                this.uploads.unshift(res);
                this.barStatus = false;
        }
    },
    (error: any) => {
        this.barStatus = false;
    }
    );
    }

    takePicture() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
  
      this.camera.getPicture(options).then((imageData) => {
        this.currentImage = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
        console.log("Camera issue:" + err);
      });
    }
    
  ngOnInit() {
  }

}
