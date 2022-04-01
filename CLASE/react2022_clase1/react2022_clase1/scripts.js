function mostrarMensaje(){
    var monto;
    var cantidad = "10";
    monto = 100
    console.log(monto + cantidad*1)
    console.log("hola"+" mundo")
    //alert("hola mundo mostrarMensaje")

}
function handleSubmit(){
    var nombre = document.formContacto.nombre.value
    var apellido = getElement("apellidoId")
    var email = document.formContacto.email.value
    var descripcion = getElement("descripcionId")
    /*var cantidad = 1
    cantidad++ 
    cantidad = cantidad +1
    cantidad+=1
    if(++cantidad===1)*/
    if(nombre==="" ){
        document.getElementById("errorNombre").innerHTML = "El campo es obligatorio" 
    }
    console.log(nombre,apellido,email,descripcion)
}
function mostrarValorSeguro(){
    var tipoSeguro = document.getElementById("seguroTipoId").value
    switch(tipoSeguro){
        case "1":
            document.getElementById("valorSeguro").innerHTML="$ 500"
            break
        case "2":
            document.getElementById("valorSeguro").innerHTML="$ 1000"
            break;
        case "3":
            document.getElementById("valorSeguro").innerHTML="$ 1500"
            break;
        default:
            document.getElementById("valorSeguro").innerHTML="$ 1500"
            break;
    }
    console.log(tipoSeguro)
}
mostrarValorSeguro()
function getElement(element){
    return document.getElementById(element).value
}
function testArray(){
    //var paises = new Array()
    /*var paises = new Array(5)
    paises[0]="Argentina"
    paises[1]="Brasil"
    console.log(paises)
    console.log(paises[1])*/
    //var paises = []
    var paises = [{equipo:"River",puntos:22},"brasil"]
    console.log(paises)
    console.log(paises[0],paises.length)
    paises.push("Uruguay")
    var mensaje=""
    for(var i=0;i<paises.length;i++){
        console.log("Pais"," "+paises[i])
        mensaje+=paises[i]
    }
    document.getElementById("paisesId").innerHTML=mensaje
}
testArray()