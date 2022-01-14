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
];
