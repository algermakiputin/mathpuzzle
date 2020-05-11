import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AdMobFree } from '@ionic-native/admob-free/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { GlobalService } from '../app/global.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    IonicStorageModule.forRoot({
      name: 'database',
      driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    GlobalService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
