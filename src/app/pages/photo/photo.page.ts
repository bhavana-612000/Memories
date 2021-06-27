import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions,} from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit{
  imageURL;
  capturedImgLoc='Photos/';
  constructor(
    public camera:Camera,
    public storage:AngularFireStorage,
    private router:Router
  ){}

  back(){
    this.router.navigate(['/login'])
  }

  imageName() {
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
  }
    async uploadPhoto(){
      const options: CameraOptions = {
        quality: 100,                                          // size of the image depends on quality
        sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,       
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation:true
        };
      const imageName = this.imageName()
      const result = await this.camera.getPicture(options)
      const currentImage = 'data:image/jpeg;base64,'+result   //stores the captured image reference
      const pictures = this.storage.ref(this.capturedImgLoc+"uploaded"+imageName)   //stores the captured image to firebase
      pictures
      .putString(currentImage,'data_url')
      .then(() =>{
        pictures.getDownloadURL().subscribe((url:any) =>{
          this.imageURL = url
          console.log(this.imageURL)
        })
      })
      
    }

   async openCamera(){
      const options:CameraOptions ={
        sourceType:this.camera.PictureSourceType.CAMERA,
        destinationType:this.camera.DestinationType.DATA_URL,
        mediaType:this.camera.MediaType.PICTURE,
        saveToPhotoAlbum:true,
        correctOrientation:true
      };
      const imageName = this.imageName()
      const result = await this.camera.getPicture(options)
      const currentImage = 'data:image/jpeg;base64,'+result;   //stores the captured image reference
      const pictures = this.storage.ref(this.capturedImgLoc+"captured"+imageName);    //stores the captured image to firebase
      pictures
      .putString(currentImage,'data_url')
      .then(() =>{
        pictures.getDownloadURL().subscribe((url:any) =>{
          this.imageURL = url
        })
      })
    }
    
  ngOnInit() {
  }

}
