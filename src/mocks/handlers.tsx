import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_BASE_URL}/cadastro`, (req, res, ctx) => {
    return res(
      ctx.json({
        email: "exemplo@frwk.com.br",
        senha: "string",
        confirmarsenha: "string",
        nome: "Frameworker",
        cidade: "Belo Horizonte",
        uf: "Minas Gerais",
        telefone: "(31)99999-9999",
        ativo: true,
      })
    );
  }),

  rest.get("https://viacep.com.br/ws/17018-750/json/", (req, res, ctx) => {
    return res(
      ctx.json({
        cep: "17018-750",
        logradouro: "Rua Luiz Bleriot",
        complemento: "de Quadra 8 ao fim",
        bairro: "Vila Aviação",
        localidade: "Bauru",
        uf: "SP",
        ibge: "3506003",
        gia: "2094",
        ddd: "14",
        siafi: "6219",
      })
    );
  }),

  rest.get("https://viacep.com.br/ws/30550-130/json/", (req, res, ctx) => {
    return res(
      ctx.json({
        cep: "30550-130",
        logradouro: "Rua Capuri",
        complemento: "",
        bairro: "Salgado Filho",
        localidade: "Belo Horizonte",
        uf: "MG",
        ibge: "3106200",
        gia: "",
        ddd: "31",
        siafi: "4123",
      })
    );
  }),

  rest.get("https://viacep.com.br/ws/30575-430/json/", (req, res, ctx) => {
    return res(
      ctx.json({
        cep: "30575-430",
        logradouro: "Rua Professor Carlos Tunes",
        complemento: "",
        bairro: "Palmeiras",
        localidade: "Belo Horizonte",
        uf: "MG",
        ibge: "3106200",
        gia: "",
        ddd: "31",
        siafi: "4123",
      })
    );
  }),
];
