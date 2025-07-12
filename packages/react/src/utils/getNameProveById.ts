export function getNameProveById(nid_prova: number) {
  switch (nid_prova) {
    case 11:
      return 'Tres Tambores';
    case 18:
      return 'Vaquejada';
    case 1:
      return 'Apartacao';
    case 2:
      return 'Redeas';
    case 3:
      return 'Western Pleasure';
    case 4:
      return 'Working CowHorse';
    case 7:
      return 'Laco Individual';
    case 8:
      return 'Laco Em Dupla';
    case 9:
      return 'Laco Pe';
    case 10:
      return 'Laco Cabeca';
    case 12:
      return 'Cinco Tambores';
    case 13:
      return 'Seis Balizas';
    case 14:
      return 'Maneabilidade E Velocidade';
    case 15:
      return 'Bulldog';
    case 16:
      return 'TeamPenning';
    case 17:
      return 'Laco Comprido Tecnico';
    case 20:
      return 'Conformacao';
    case 22:
      return 'Laco Individual Tecnico';
    case 23:
      return 'Ranch Sorting';
    case 24:
      return 'Performance Halter';
    case 25:
      return 'Breakaway Roping';
    case 30:
      return 'Laco Comprido';
    case 48:
      return 'Corrida';
    default:
      return '';
  }
}
