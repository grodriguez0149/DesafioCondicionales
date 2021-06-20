let nivelIngresado = prompt("Ingresar Nivel")

if((nivelIngresado == 'ADMIN') || (nivelIngresado == 'admin') || (nivelIngresado == 'Admin')){
alert('Usted está habilidado para realizar las opercaciones necesarias');
}else{
    console.log (`Estimado usuario ${nivelIngresado} usted no puede realizar modificacioens` );
}
