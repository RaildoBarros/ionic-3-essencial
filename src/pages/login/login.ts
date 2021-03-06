import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: Object = {
    email: "",
    password: "",
  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider
  ) {
  }

  ionViewDidLoad() {

  }

  login() {
    this.authService.login(this.credential);
  }

  logout() {
    this.authService.logout();
  }

}
