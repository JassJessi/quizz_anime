let perguntas = [
    
{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},
{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},

{
    titulo: 'Primeiro(a) companheiro(a) a entrar no bando do Luffy?',
    alternativas: ['Zoro', 'Sanji', 'Nami', 'Robbin'],
    correta: 2
},
]

let app = {
//Transformando a função em metódo
start: function(){

    this.Atualpos = 0;
    this.Totalpontos = 0;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index)=>{
        element.addEventListener('click', ()=>{
            this.checaResposta(index);        
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual = q;
    //mostrando o titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    //mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        })

},

Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }
},

checaResposta: function(user){
    if(this.qatual.correta == user){
        console.log("Correta")
        this.Totalpontos++;
        this.mostraresposta();
    }
    else{
        console.log("Errada")
        this.mostraresposta();
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
},

mostraresposta: function(correto){
    let resultDiv = document.getElementById('result');
    let result = '';
    //formatar com a mensagem será exibida
    if(correto ==  true){
        result = 'Resposta Correta';
    }
    else{
        //obtendo a questão atual
        let pergunta = perguntas[this.Atualpos];
        //obtenha o indice da resposta correta da questão atual
        let cindice = pergunta.correta; 
        //obtenha o texto da resposta atual
        let ctexto = pergunta.alternativas[cindice];
        result = `Incorreto! Resposta Correta: ${ctexto}`;
    }
 //Erro ao mostrar a alternativa correta (consertar)
    resultDiv.textContent = result;
}


}


app.start();



/* Ouvinte de eventos: Avisa que o usuário clicou em algum lugar da tela

let btn = document.getElementById('btn');
btn.addEventListener('click',function() {
    console.log("O cara clicou ali oh!");
})
*/

