//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//Execute uma ação
function cloneField() {
    //Duplicar os campos{
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {
        field.value = ""
    })
    //Colocar os campos

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


    