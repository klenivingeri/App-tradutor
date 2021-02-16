export class Coracao{

    constructor( // assinatura do metodo
        public cheio: boolean,
        public UrlCoracaoCheio: string = "/assets/coracao_cheio.png", // valor já atribuido na assinatura fica defaut na declaracao da classe
        public UrlCoracaoVazio: string = "/assets/coracao_vazio.png"

    ){}

    public exibeCoracao(){
        if(this.cheio){
            return this.UrlCoracaoCheio
        }else{
            return this.UrlCoracaoVazio
        }
    }
}