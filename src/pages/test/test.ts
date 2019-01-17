import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public cliente: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: HttpServiceProvider
  ) {

    let cliente_id  = this.navParams.get('cliente_id');

    this.http.get('clientes', cliente_id)
      .subscribe(data => {
        this.cliente = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
