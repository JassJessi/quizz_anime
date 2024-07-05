let perguntas = [
    
    {
        titulo: 'Quem é o protagonista de "Jujutsu Kaisen?',
        alternativas: ['Megumi Fushiguro', 'Yuji Itadori', 'Satoru Gojo'],
        correta: 1
    },
    
    {
        titulo: 'Qual é o nome da escola onde Yuji se matricula para aprender sobre maldições?',
        alternativas: ['Colégio Técnico de Jujutsu de Kyoto', 'Colégio Técnico de Jujutsu de Osaka', 'Colégio Técnico de Jujutsu de Tóquio'],
        correta: 2
    },
    
    {
        titulo: 'Quando a Robbin entra pela primeira vez no bando?',
        alternativas: ['x', 'x', 'Após o arco de alabasta', 'x'],
        correta: 2
    },
    
    {
        titulo: 'Segundo(a) companheiro(a) a se juntar ao luffy?',
        alternativas: ['Sanji', 'Chopper', 'Nami', 'Zoro'],
        correta: 2
    },
    
    {
        titulo: 'Nome do vilão que eles enfrentam na ilha da Nami?',
        alternativas: ['Barba negra', 'Buggy', 'Barba branca', 'Airou'],
        correta: 3
    },
    
    {
        titulo: 'Terceiro(a) companheiro(a) a se juntar ao luffy?',
        alternativas: ['Zoro', 'Usopp', 'Nami', 'Sanji'],
        correta: 3
    },
    
    {
        titulo: 'Nome da ilha da Nami?',
        alternativas: ['x', 'Vila cocoiachi', 'x', 'x'],
        correta: 2
    },
    
    {
        titulo: 'Qual o nome do irmão do Luffy?',
        alternativas: ['Sabo', 'Ace', 'x', 'x'],
        correta: 1
    },
    
    {
        titulo: 'Porque a Nami odeia piratas?',
        alternativas: ['Por causa dos homens peixe que invadiram sua vila', 'x', 'x', 'x'],
        correta: 0
    },
    
    {
        titulo: 'Nome primeiro companheiro(a) temporário(a) da tripulação?',
        alternativas: ['Robbin', 'Vivi', 'Franky', 'Koubi'],
        correta: 3
    },
    
    {
        titulo: 'Nome do pirata que salvou o Sanji?',
        alternativas: ['Zeffy', 'Rogger', 'Buggy', 'Crocodile'],
        correta: 0
    },
    
    {
        titulo: 'Nome da amiga do Zoro?',
        alternativas: ['x', 'x', 'x', 'Quina'],
        correta: 3
    },
    {
        titulo: 'Qual o objetivo do Zoro?',
        alternativas: ['One Piece', 'Ser o maior espadachin', 'Ser cartográfo', 'Encontrar o alblue'],
        correta: 1
    },
    
    {
        titulo: 'Primeiro(a) companheiro(a) temporário(a) da tripulação depois que entram na GranLine?',
        alternativas: ['vivi', 'Usopp', 'Franky', 'Robbin'],
        correta: 0
    },
    
    {
        titulo: 'Qual o objetivo da Nami?',
        alternativas: ['x', 'x', 'x', 'Desenhar um mapa do mundo inteiro'],
        correta: 3
    },
    
    {
        titulo: 'Como eles entraram na GranLine?',
        alternativas: ['Por uma ponte', 'Subindo uma cachoiera', 'Por um portal', 'Por um buraco no fundo do mar'],
        correta: 1
    },
    
    {
        titulo: 'Qual o objetivo do Luffy?',
        alternativas: ['Ser médico', 'arqueologo', 'ser o maior cozinheiro', 'One Piece'],
        correta: 3
    },
    
    {
        titulo: 'Nome do primeiro vilão que o Luffy enfrenta?',
        alternativas: ['Crocodile', 'Airou', 'Buggy', 'Don Flamingo'],
        correta: 2
    },
    
    {
        titulo: 'Nome da fruta da Robbi',
        alternativas: ['x', 'x', 'x', 'Robbin'],
        correta: 3
    },
    
    {
        titulo: ' Nome da fruta do Usopp',
        alternativas: ['Ele não comeu nenhuma fruta', 'Bararanomi', 'Gomugomunomi', 'A fruta do mentiroso'],
        correta: 0
    },
    
    {
        titulo: 'Qual o objetivo do Sanji?',
        alternativas: ['Alblue', 'x', 'x', 'x'],
        correta: 2
    },
    
    {
        titulo: ' Quantos dos tripulantes não são usuários de acumanomi? (Até o arco de escaipia)',
        alternativas: ['1', '2', '3', '4'],
        correta: 2
    },
    
    {
        titulo: 'Nome da fruta do Buggy?',
        alternativas: ['x', 'x', 'x', 'x'],
        correta: 2
    },
    
    {
        titulo: 'QNome da baleia que eles enfrentam quando entram na GranLine?',
        alternativas: ['x', 'x', 'x', 'x'],
        correta: 2
    },
    
    {
        titulo: 'Nome da fruta do Luffy',
        alternativas: ['x', 'x', 'x', 'x'],
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

    
    