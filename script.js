function Listphrases(){
    var advicesList = ["Lembre-se de que as aranhas têm mais medo de você do que você delas.", "Pessoas com metas são bem-sucedidas porque sabem para onde estão indo.", "O passado não é igual ao futuro.", "Começar é o passo mais difícil, mas você pode fazê-lo.", "Sucesso é a realização progressiva de um objetivo digno.", "Estamos todos em andamento.", "O caminho para o sucesso é tomar medidas massivas e determinadas.", "Tudo o que você precisa é o plano, o roteiro e a coragem de seguir em frente até o seu destino.", "Pequeno progresso ainda é progresso.", "Sua mente está cheia de ideias brilhantes, por que não mostrar para o mundo?", "O fracasso é apenas outra maneira de aprender a fazer algo certo."]

    var phrase = document.getElementById("phrase")
    var random = randomNumber(0, 9)

    phrase.innerHTML = advicesList[random]
}

function randomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

