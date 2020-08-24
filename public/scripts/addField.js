//procurar o botão
document.querySelector("#add-time")
//click é o tipo de evento
//cloneField é oq vai acontecer, nesse caso é uma função
//quando clicar no botão
.addEventListener("click",  cloneField)


//executar uma ação
function cloneField () {

    //duplicar os campos. Que campos?
    //Node é usado pra se referir a elementos HTML
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//cópia os elementos

    //acessar os campos. Qual campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //paga o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página. Onde colocar na página?
    //appendChild() adiciona um elemento
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
