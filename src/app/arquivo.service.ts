import { Injectable } from "@angular/core";
import { IArquivo } from "./model/IArquivo";

@Injectable()
export class ArquivoService {

  constructor() {}

  public findAllArquivos = (): IArquivo[] => {
    let arquivos: IArquivo[] = [];
    
    for (let i = 0; i < 200; i++) {
      const arquivo: IArquivo = {
        id: i + 1,
        nome: `Arquivo_${i + 1}${i % 3 === 0 ? '.txt' : '.zip'}`,
        tamanho: `${i}MB`,
        inicioUpload: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        fimUpload: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        inicioProcessamento: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        fimProcessamento: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        inicioDownload: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        fimDownload: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
        statusProcessamento: `${i % 2 === 0 ? 'Upload com sucesso' : 'Download com falha'}`,
        status: i % 2 === 0 ? 'OK' : 'ERRO',
        tempoTotal: `${i < 60 ? i : Math.round(i / 60)} horas, ${i < 60 ? i : Math.round(i / 60)} minutos e ${i < 60 ? i : Math.round(i / 60)} segundos`
      };

      arquivos = [...arquivos, arquivo];
    }

    return arquivos;
  }
}