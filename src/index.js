import cipher from './cipher.js';

 //CIFRAR
document.getElementById("cifrar").addEventListener("click", () =>{
    let mensaje = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cipher.encode(desplazamiento, mensaje.toUpperCase()); 
});

//DESCIFRAR
document.getElementById("descifrar").addEventListener("click", ()=>{ 
    let mensaje2 = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    
    document.getElementById("mensaje2").value = cipher.decode(desplazamiento, mensaje2.toUpperCase());   
});
console.log(cipher);

