import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { sqrt} from 'mathjs';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  inputString: String = "";
  clearTextForNextInput: boolean = false;

   
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(sqrt(4).toString());
    });
  }

  calculateExpression(){
    try {
      return evaluate(this.inputString.toString()) 
    }
    catch(err) {
      this.clearTextForNextInput = true;
      return "Error";
    }

  }

  onButtonClicked(button: string){
    if(this.clearTextForNextInput){
      this.inputString = "";
      this.clearTextForNextInput = false;
    }

    if(button === '='){
      this.inputString = this.calculateExpression().toString();
    }else if(button === 'clear'){
      this.inputString = "";
    }else if(button === 'del'){
      this.inputString = this.inputString.slice(0, -1) ;
    }else{
      this.inputString += button;
    }
  }

}
