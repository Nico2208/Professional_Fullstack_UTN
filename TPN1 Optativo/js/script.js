function mostrarValorSeguro () {
    var tipoSeguro = document.getElementById('tipoSeguro').value;
    switch(tipoSeguro){
        case "1":
            document.getElementById("precioSeguro").innerHTML="$ 500"
            break
        case "2":
            document.getElementById("precioSeguro").innerHTML="$ 1000"
            break;
        case "3":
            document.getElementById("precioSeguro").innerHTML="$ 1500"
            break;
    }
}