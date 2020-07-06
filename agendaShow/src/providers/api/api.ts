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
  eventos = [
    {
      id: 1,
      estabelecimentos_id: 1,
      nome: "Festa no Ap\u00ea",
      descricao: "Shows de Pagode a noite toda",
      banner: null,
      cronograma: "Inicio 21Hrs at\u00e9 as 02Hrs",
      status: 1,
      created: "2020-07-05T20:50:51+00:00",
      modified: "2020-07-05T20:50:51+00:00",
      estabelecimento: {
        id: 1,
        users_id: 1,
        nome: "Barzinho do Seu Z\u00e9",
        categoria: 1,
        proprietario: "Z\u00e9",
        telefone: "46899090033",
        celular: "23987540893",
        logradouro: "Rua Benedito",
        cep: "29398-000",
        numero: "33",
        cidade: "Vix",
        status: 1,
        created: "2020-07-05T20:50:51+00:00",
        modified: "2020-07-05T20:50:51+00:00",
      },
    },
    {
      id: 2,
      estabelecimentos_id: 2,
      nome: "RockFsst",
      descricao: "Festivel de Rock Calssico",
      banner: null,
      cronograma: "Inicio 21Hrs at\u00e9 as 02Hrs",
      status: 1,
      created: "2020-07-05T20:50:51+00:00",
      modified: "2020-07-05T20:50:51+00:00",
      estabelecimento: {
        id: 2,
        users_id: 1,
        nome: "Rock Club",
        categoria: 2,
        proprietario: "Carlos",
        telefone: "2899874322",
        celular: "27989834123",
        logradouro: "Rua Henrique",
        cep: "35706-443",
        numero: "54",
        cidade: "Vix",
        status: 1,
        created: "2020-07-05T20:50:51+00:00",
        modified: "2020-07-05T20:50:51+00:00",
      },
    },
  ];
  estabelecimentos = [
    {
      id: 1,
      users_id: 1,
      nome: "Barzinho do Seu Z\u00e9",
      categoria: 1,
      proprietario: "Z\u00e9",
      telefone: "46899090033",
      celular: "23987540893",
      logradouro: "Rua Benedito",
      cep: "29398-000",
      numero: "33",
      cidade: "Vix",
      status: 1,
      created: "2020-07-05T20:50:51+00:00",
      modified: "2020-07-05T20:50:51+00:00",
    },
    {
      id: 2,
      users_id: 1,
      nome: "Rock Club",
      categoria: 2,
      proprietario: "Carlos",
      telefone: "2899874322",
      celular: "27989834123",
      logradouro: "Rua Henrique",
      cep: "35706-443",
      numero: "54",
      cidade: "Vix",
      status: 1,
      created: "2020-07-05T20:50:51+00:00",
      modified: "2020-07-05T20:50:51+00:00",
    },
  ];
  public getEventos() {
    return new Promise((resolve, reject) => {
      // this.server
      //   .GET("getEventos")
      //   .then((resp) => {
      //     resolve(resp);
      //   })
      //   .catch((erro) => reject(erro));
      resolve(this.eventos);
    });
  }

  public getEvento(id: any) {
    return new Promise((resolve, reject) => {
      // this.server
      //   .GET("getEvento", id)
      //   .then((resp) => {
      //     resolve(resp);
      //   })
      //   .catch((erro) => reject(erro));
      resolve(this.eventos[id - 1]);
    });
  }

  public getEstabelecimentos() {
    return new Promise((resolve, reject) => {
      //   this.server
      //     .GET("getEstabelecimentos")
      //     .then((resp) => {
      //       resolve(resp);
      //     })
      //     .catch((erro) => reject(erro));

      resolve(this.estabelecimentos);
    });
  }

  public getEstabelecimento(id: any) {
    return new Promise((resolve, reject) => {
      // this.server
      //   .GET("getEstabelecimento", id)
      //   .then((resp) => {
      //     resolve(resp);
      //   })
      //   .catch((erro) => reject(erro));
      resolve(this.estabelecimentos[id - 1]);
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
