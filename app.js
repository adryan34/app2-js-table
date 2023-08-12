
populeazaTabel();

buttonAdd.addEventListener("click", () => {
  

    
    if(validareTitlu(inputCarte.value).flag === false) {
        alert(validareTitlu(inputCarte.value).msg);
    }

    
    if(validareTitlu(inputCarte.value).flag) {
    let carte = {
        titlu: inputCarte.value,
        autor: inputAutor.value,
        an: inputAn.valie
    };
    
    librarie.push(carte);
    populeazaTabel();
    }
})