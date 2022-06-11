import cipher from './cipher.js';

 //CIFRAR
document.getElementById("code").addEventListener("click", () =>{
    let text = document.getElementById("text").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("text2").value = cipher.encode(offset, text.toUpperCase()); 
});

//DESCIFRAR
document.getElementById("decode").addEventListener("click", ()=>{ 
    let text2 = document.getElementById("text").value;
    let offset = document.getElementById("offset").value;
    
    document.getElementById("text2").value = cipher.decode(offset, text2.toUpperCase());   
});
console.log(cipher);