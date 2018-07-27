import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public text: string;

  constructor(
    public navCtrl: NavController
    , public actionSheetCtrl: ActionSheetController
  ) {

  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Action Sheet Title',
      buttons: [
        {
          text: 'Destructive',
          icon: 'cancel',
          role: 'destructive',
          handler: () => {
            this.text = 'Destructive clicked';
          }
        }, {
          text: 'Archive',
          icon: 'camera',
          handler: () => {
            this.text = 'Archive clicked';
          }
        }, {
          text: 'Cancel',
          icon: 'home',
          role: 'cancel',
          handler: () => {
            this.text = 'Cancel clicked';
          }
        }
      ]
    });
    actionSheet.present();
  }

}