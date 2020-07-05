import { EstabelecimentosPage } from './../pages/estabelecimentos/estabelecimentos';
import { EstabelecimentoPage } from './../pages/estabelecimento/estabelecimento';
import { EventosPage } from './../pages/eventos/eventos';
import { HTTP } from '@ionic-native/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EventoPage } from "../pages/evento/evento";
import { PrincipalPage } from "../pages/principal/principal";
import { ServerProvider } from '../providers/server/server';
import { AuthProvider } from '../providers/auth/auth';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    EventoPage,
    PrincipalPage,
    EventosPage,
    EstabelecimentoPage,
    EstabelecimentosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventoPage,
    PrincipalPage,
    EventosPage,
    EstabelecimentoPage,
    EstabelecimentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider,
    AuthProvider,
    ApiProvider
  ]
})

export class AppModule {}
