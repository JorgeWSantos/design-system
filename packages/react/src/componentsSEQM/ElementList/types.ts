export interface ListaAoVivo {
  nid_evento: number;
  nid_prova_evento: number;
  nid_prova_evento_classificatoria: number;
  cds_tipo_prova: string;
  bid_juvenil: boolean;
  nid_prova: number;
  cds_modalidade: string;
  cds_status_prova_evento: string;
  nnr_competidores: number;
}

export interface Modalidades {
  nid_modalidade: number;
  cds_modalidade: string;
  nnr_competidores: number;
  nid_prova_evento_classificatoria: number;
  nid_prova_evento: number;
  cds_status_prova_evento: string;
  bid_juvenil: boolean;
}

export interface ProvasEvento {
  nid_prova: number;
  cds_tipo_prova: string;
  modalidades: Modalidades[];
}

export interface ListaEvento {
  cds_evento: string;
  nid_evento: number;
  provas: ProvasEvento[];
}
