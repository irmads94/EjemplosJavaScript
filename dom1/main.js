//var cajas=document.getElementsByTagName('div')
//var cajas=document.getElementsByClassName('caja')
//cajas[0].textContent='Hola mundo'
//cajas[1].innerHTML='<b>Hola JavaScript</b>'

var caja=document.getElementById('primera')
caja.textContent='Primera caja';

//agregar nuevo elemento a la pagina
//NO SE RECOMIENDA AGREGAR ELEMENTOS CON EL METODO WRITE
//document.write('<div class="caja">Nuevo elemento</div>')

//5 PASOS para agregar un nuevo elemento en el DOM

//PASO 1. Crear el nuevo elemento (createElement())
var elementoNuevo = document.createElement('div')

//PASO 2. Crear el contenido (createTextNode())
var nodoContenido = document.createTextNode('Nuevo Elemento')

//PASO 3. Añadir el contenido al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)

//PASO 4. Agregar atributos al elemento (setAttribute())
elementoNuevo.setAttribute('class','caja colorCoral')
//elementoNuevo.setAttribute('class','colorCoral')

//PASO 5. Agregar el elemento al documento (appendChild())

/*Agrega el nuevo elemento al final 
var contenedor=document.getElementById('contenedor')
contenedor.appendChild(elementoNuevo)*/

//agrega el nuevo elemento al principio

var contenedor=document.getElementById('contenedor')
var primera=document.getElementById('primera')
contenedor.insertBefore(elementoNuevo,primera)

//ELIMINAR LA CAJA CON EL ID = TERCER
var tercera=document.getElementById('tercer')
contenedor.removeChild(tercera)