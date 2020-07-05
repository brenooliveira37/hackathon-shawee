import { HTTP } from "@ionic-native/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  token: any;
  usuario: any;
  enderecoServidor = "localhost";

  constructor(public httpNative: HTTP) {}

  public login(usuario: string, senha: string) {
    let obj = { username: usuario, password: senha };
    let login = { autorizado: false, menssagem: "" };

    return this.POSTLogin("login", obj)
      .then((data: any) => {
        if (data.error == null) {
          this.token = data.token;
          this.usuario = data.usuario;
          login.autorizado = true;
        } else {
          login.autorizado = false;
          if (data.error == "Requisição inadequada") {
            login.menssagem = "Requisição Inadequada, Contate o Administrador.";
          } else if (data.error == "Usuário e/ou Senha inválido") {
            login.menssagem = "Usuário e/ou Senha inválido.";
          } else {
            login.menssagem = "Erro Desconhecido, Contate o Administrador.";
          }
        }
        return login;
      })
      .catch((erro) => {
        console.log("Erro Login", JSON.stringify(erro));
        login.autorizado = false;
        login.menssagem = "Erro Desconhecido, Contate o Administrador.";

        return login;
      });
  }

  public logout() {
    this.token = null;
    this.usuario = null;
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
