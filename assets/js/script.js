//Selecionando ul (LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

//Adicionando escutador de eventos
listaOpcoes.addEventListener("click", indentificarOpcoes)

//Executando acao depois do click 
function indentificarOpcoes(event){
    
    //Identificando onde ocorreu o click
    const elemento  = event.target

    //Verificando se e um li 
    if(elemento.tagName == "LI"){

        //Recuperando o ID
        const id = elemento.id
        
        //Selecionando uma secao utilizando o ID(ESCOLHA DO USUARIO)
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        //Removendo classe mostrar
        removeClasseMostrar()
        
        //Adicionar uma classe
        secaoEscolha.classList.add("mostrar")
    }
}

//Funcao para remover as classes das Divs
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}