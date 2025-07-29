export interface LoggedUser {
  id_pessoa: number;
  nome_pessoa: string;
  tipo_pessoa: string;
  socio: string;
  adimplente: string;
  adimplente_servicos: string;
  email: string;
  status_foto: number;
  usuario_comercial: string | null;
  status_cadastro: string;
  acao: string;
  dt_expiracao: string;
}
