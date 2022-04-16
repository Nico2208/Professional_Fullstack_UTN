function mostrarValorSeguro () {
    var tipoSeguro = document.getElementById('tipoSeguro').value;
    switch(tipoSeguro){
        case "1":
            document.getElementById("precioSeguro").innerHTML="El valor del seguro seleccionado es $ 500"
            break
        case "2":
            document.getElementById("precioSeguro").innerHTML="El valor del seguro seleccionado es $ 1000"
            break;
        case "3":
            document.getElementById("precioSeguro").innerHTML="El valor del seguro seleccionado es $ 1500"
            break;
    }
}