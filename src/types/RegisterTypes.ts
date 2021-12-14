export type CepType = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export interface RegisterType {
    nomeCompleto: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    cpf: string;
    cep: string;
    rua: string;
    numero: string;
    cidade: string;
    uf: string;
}