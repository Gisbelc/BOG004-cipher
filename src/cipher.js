const cipher =  {     
    //CIFRAR 
    encode: (desplazamiento, mensaje) => { 

//Si alguno de los parametros se encuentran vacios debe arrojar TypeError 
      if (!desplazamiento || !mensaje) {
        throw new TypeError();
      }

      let resultado = ""; //almacenara el caracter cifrado 
      for (let i = 0; i < mensaje.length; i++) {  //recorre los caracteres    
        let ascii = mensaje[i].charCodeAt(); //arroja el codigo ascii a mensaje  
        if (ascii >= 65 && ascii <= 90) {        
          let newAscii = (((ascii - 65 + parseInt(desplazamiento)) % 26) + 65); //si el ascii es mayor o igual a 65 o menor igual a 90 entonces 
          resultado += String.fromCharCode(newAscii); //arroja su pocision en letra
        } else { //Si no se cumple la condicion devuelve mensaje con el valor agregado sin obtener el codigo ascii
          resultado += mensaje[i]; 
      }
    }
      return resultado;
    },
     //DESCIFRAR
    decode: (desplazamiento, mensaje2) => {
//Si alguno de los parametros se encuentran vacios debe arrojar TypeError 
        if (!mensaje2 || !desplazamiento) {
        throw new TypeError(); 
        }    

      let resultado = "";  //almacenara el caracter descifrado
      for (let i = 0; i < mensaje2.length; i++) { //recorre los caracteres  
        let ascii = mensaje2[i].charCodeAt(); //arroja el codigo ascii a mensaje  
        if (ascii >= 65 && ascii <= 90) {
          let newAscii = (((ascii + 65 - parseInt(desplazamiento)%26) % 26) + 65); //si el ascii es mayor o igual a 65 o menor igual a 90 entonces 
          resultado += String.fromCharCode(newAscii); //arroja su posicion en letra 
        } else { //Si no se cumple la condicion devuelve mensaje con el valor agregado sin obtener el codigo ascii
          resultado += mensaje2[i];
        } 
      }
      return resultado;
    }, 
      
};
export default cipher;
