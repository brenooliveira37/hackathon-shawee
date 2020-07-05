import { HTTP } from '@ionic-native/http';
import { AuthProvider } from './../auth/auth';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  enderecoServidor = 'localhost/api';

  constructor(private httpNative: HTTP, private auth: AuthProvider) { }

  // metodo para realizar o POST no horus
  POST(controller: any, obj: any) {
    const url = this.enderecoServidor + '/' + controller;

    return new Promise((resolve, reject) => {

      this.httpNative.setDataSerializer('json');
      this.httpNative.setHeader(url, 'Accept', 'application/json');
      this.httpNative.setHeader(url, 'Content-Type', 'application/json');

      this.httpNative.post(url, obj, {})
        .then((resp) => {
          resolve(JSON.parse(resp.data));
        }).catch((erro) => {
          reject(erro);
        });
    });
  }

  // metodo para realizar o GET no horus
  GET(controller: any, method?: any, parameters?: any) {
    let url = this.enderecoServidor + '/' + controller;

    if (method) {
      url += '/' + method;
    }
    if (parameters) {
      url += '?' + parameters;
    }

    return new Promise((resolve, reject) => {

      this.httpNative.get(url, {}, {})
        .then((resp) => {
          resolve(JSON.parse(resp.data));
        }).catch((erro) => {
          reject(erro);
        });
    });
  }

   // metodo par arealiza ro POST no horus, sem necessidade de login
   POSTLogin(controller: any, obj: any) {
    const url = this.enderecoServidor + "/" + controller;

    return new Promise((resolve, reject) => {
      this.httpNative.setDataSerializer("json");
      this.httpNative.setHeader(url, "Accept", "application/json");
      this.httpNative.setHeader(url, "Content-Type", "application/json");

      this.httpNative
        .post(url, obj, {})
        .then((resp) => {
          console.log(resp);
          resolve(JSON.parse(resp.data));
        })
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  }
}
