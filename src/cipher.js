const cipher =  {     
    //CIFRAR 
    encode: (mensaje, desplazamiento) => { 

      if (!mensaje && !desplazamiento) {
        throw new TypeError();
      }
      let resultado = " "; //almacenara el caracter cifrado 
      for (let i = 0; i < mensaje.length; i++) {  //recorre los caracteres    
        let ascii = mensaje[i].charCodeAt(); //arroja el codigo ascii a mensaje  
        if (ascii >= 65 && ascii <= 90) {        
          let newAscii = (((ascii - 65 + parseInt(desplazamiento)) % 26) + 65); //si el ascii es mayor o igual a 65 o menor igual a 90 entonces 
          resultado += String.fromCharCode(newAscii); //arroja su pocision en letra
        } else {
          resultado += mensaje[i]; 
      }
    }
      return resultado;
    },
     //DESCIFRAR
    decode: (mensaje2, desplazamiento) => {

        if (!mensaje2 && !desplazamiento) {
        throw new TypeError(); 
        }    
      let resultado = " ";
      for (let i = 0; i < mensaje2.length; i++) {
        let ascii = mensaje2[i].charCodeAt(); 
        if (ascii >= 65 && ascii <= 90) {
          let newAscii = (((ascii + 65 - parseInt(desplazamiento)%26) % 26) + 65);
          resultado += String.fromCharCode(newAscii);
        } else {
          resultado += mensaje2[i];
        } 
      }
      return resultado;
    },
      
};
export default cipher;
