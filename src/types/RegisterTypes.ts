export type CepType = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface RegisterType {
  nomeCompleto: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  cep: string;
  street: string;
  number: string;
  city: string;
  state: string;
}
