import { ServerProvider } from "./../server/server";
import { Injectable } from "@angular/core";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  constructor(public server: ServerProvider) {}

  public getEventos() {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getEventos")
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getEvento(id: any) {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getEvento", id)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getEstabelecimentos() {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getEstabelecimentos")
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getEstabelecimento(id: any) {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getEstabelecimento", id)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getCidades() {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getEventos")
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getCliente(id: any) {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getCliente", id)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public addCliente(obj: any) {
    return new Promise((resolve, reject) => {
      this.server
        .POST("addCliente", obj)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public editCliente(id: any, obj: any) {
    return new Promise((resolve, reject) => {
      this.server
        .POST("editCliente/" + id, obj)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public addUser(obj: any) {
    return new Promise((resolve, reject) => {
      this.server
        .POST("addUser", obj)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public addAvaliacao(obj: any) {
    return new Promise((resolve, reject) => {
      this.server
        .POST("addAvaliacao", obj)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getAvaliacao(id: any) {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getAvaliacao", id)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public getAvaliacoes(id: any) {
    return new Promise((resolve, reject) => {
      this.server
        .GET("getAvaliacoes", id)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }

  public editAvaliacao(id: any, obj: any) {
    return new Promise((resolve, reject) => {
      this.server
        .POST("editAvaliacao/" + id, obj)
        .then((resp) => {
          resolve(resp);
        })
        .catch((erro) => reject(erro));
    });
  }
}
