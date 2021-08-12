// code here!!



const nombrePromesa = new Promise((resolve, reject)=>
{

    var num1 = parseInt(prompt('Ingresa el número 1'));
var num2 = parseInt(prompt('Ingresa el número 2'));
var num3 = parseInt(prompt('Ingresa el número 3'));
var x = "";
var  suma = num1 + num2 + num3; 

setTimeout( () => suma>25 
? resolve ("El Resultado es: "+suma)
: reject (new Error ("")),1000)

})
nombrePromesa.then((resolve) => {
 let respuesta = document.querySelector('div')
 respuesta.innerHTML = resolve;
}).catch( (error) => {
    let respuesta = document.querySelector('div')
 respuesta.innerHTML = "";
});


