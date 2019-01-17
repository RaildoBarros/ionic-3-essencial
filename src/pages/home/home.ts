import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public  clientes: Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: HttpServiceProvider
  ) {

    this.http.getAll('clientes')
      .subscribe(data => {
        this.clientes = data;
        console.log("TESTE"+data[1]);
      });
  }

  getClientesInfo(id) {
    this.navCtrl.push(TestPage,
      {
        'cliente_id': id
      });
  }
}
