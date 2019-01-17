import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];

  public cliente =  {
    name: "",
    endereco: "",
    idade: "",
    img: "",
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public http: HttpServiceProvider,
              public camera: Camera,
              public authService: AuthProvider
  ) {

  }

  ionViewCanEnter() {
    //return this.authService.userIsLogged();
  }

  saveCliente(cliente) {

    this.http.post('clientes', cliente)
      .subscribe(data => {
        let toast = this.toastCtrl.create({
          message: data.msg,
          duration: 3000
        });
        toast.present();
      });

  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cliente.img = base64Image;

    }, (err) => {
      console.log(err);
    });
  }


}
