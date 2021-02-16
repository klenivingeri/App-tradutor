import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor() {
    //console.log(this.coracoes)
    
  }


  ngOnChanges(){// altera sempre que a class pai for atualizada, sempre que existir input de dados esse metodo é disparado
    
    if(this.tentativas !== this.coracoes.length){
//this.coracoes.length começa com 3 tentativas
       let indice = this.coracoes.length - this.tentativas 

       this.coracoes[indice - 1].cheio = false
       console.log(this.coracoes.length ,' - ', this.tentativas, ' : ', indice - 1)
    }
    
  }

  ngOnInit() { // ciclo de vida do componente ganchos/ LifeCycle Hoocks
    //é inicializado uma unica vez na inicialização do componente
    
  }

}
