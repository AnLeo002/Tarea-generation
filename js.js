'use strict';
const array = [];

for (let i = 0; i < 3; i++) {
   let ingreso = parseInt(prompt(`Ingrese el numero ${i+1}`));
   array[i]=ingreso; 
}
if(array[0]==array[1]||array[1]==array[2]||array[2]==array[0]){
    alert('existen numeros iguales')
}else{
    console.log('no existen numeros iguales')
} 

console.log(array.sort((a,b)=>b-a))
console.log(array.reverse());