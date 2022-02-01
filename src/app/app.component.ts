import { Component } from '@angular/core';
import { ArquivoService } from './arquivo.service';
import { IArquivo } from './model/IArquivo';


interface IColumn {
  field: string;
  header: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arquivos: IArquivo[] = [];
  
  public tableCols: IColumn[] = [
    {
      field: 'id',
      header: 'ID'
    },
    {
      field: 'nome',
      header: 'Arquivo'
    },
    {
      field: 'tamanho',
      header: 'Tamanho'
    },
    {
      field: 'statusProcessamento',
      header: 'Status'
    },
    {
      field: 'inicioProcessamento',
      header: 'Início Processamento'
    },
    {
      field: 'fimProcessamento',
      header: 'Fim Processamento'
    },
    {
      field: 'inicioUpload',
      header: 'Início Upload'
    },
    {
      field: 'fimUpload',
      header: 'Fim Upload'
    },
    {
      field: 'inicioDownload',
      header: 'Início Download'
    },
    {
      field: 'fimDownload',
      header: 'Fim Download'
    },
    {
      field: 'tempoTotal',
      header: 'Tempo Total'
    }
  ];

  public first = 0;

  constructor (private arquivoService: ArquivoService) {}

  ngOnInit() {
    this.arquivos = this.arquivoService.findAllArquivos();
  }

  public handlePageChange = (event: any) => {
    console.log({ event });
  }
}
