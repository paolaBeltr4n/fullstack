var log = 1;

var log2 = 4;

console.log(log);

var log = false;

console.log(log);

var logfull = log * log2;

console.log(logfull)

var log5 = [1,2,3,4,5,6,7,8,9] 

var logarray = log5[5] + 6

console.log(log5[5])

console.log(logarray)

if (log==true) {
	alert("O-O")
}else {
	alert("X-X")
}

for (i=0; i<5; i++){
	console.log("Hola "+ i)
}

var colores = ["Amarillo","Azul","Rojo"]

for (dia in colores){
	console.log(colores[dia]);
}

var num1 = 4

var num2 = 8

function sumar (){
	var resul=num1+num2;
	console.log(resul);
}

sumar();


function restar(n1,n2) {
	var res=n1-n2;
	return res;
}

console.log(restar(2,8));


var valor=15000 

function iva(){
	var resultado= valor * 19 / 100;
	alert("El iva es de " + resultado);
	console.log(resultado);
}

iva();

var mascota={"Nombre":"Caramelo","Edad":"2"}
var persona={"Nombre":"Andres","Apellido":"Cerero","Edad":22,"Mascota":mascota}

persona.Nombre="Jorge";

console.log(persona);

function cambiarTitulo(){
	var miHtml=document.getElementById("Titulo");
	miHtml.innerText="Titulo2"; 
}

function incrementar(){
	var numero1 = document.getElementById("numero1").value;
	numero1++;
	document.getElementById("numero1").value = numero1;
}

