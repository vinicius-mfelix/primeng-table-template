export interface IArquivo {
  id: number;
  nome: string;
  tamanho: string;
  statusProcessamento: string;
  inicioUpload: string;
  fimUpload: string;
  inicioProcessamento: string;
  fimProcessamento: string;
  inicioDownload: string;
  fimDownload: string;
  tempoTotal: string;
  status: string;
}
