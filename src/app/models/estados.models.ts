interface EstadoSimples {
    id: number;
    nome: string;
    sigla: string;
}

export interface ModelEstado extends EstadoSimples {
    regiao: EstadoSimples;
}
