const cipher =  {     
  //CIFRAR 
  encode: (offset, text) => { 

    let result = ""; //almacenara el caracter cifrado 
    for (let i = 0; i < text.length; i++) {  //recorre los caracteres    
      let ascii = text[i].charCodeAt(); //arroja el codigo ascii a mensaje  
      if (ascii >= 65 && ascii <= 90) {        
        let newAscii = (((ascii - 65 + parseInt(offset)) % 26) + 65); //si el ascii es mayor o igual a 65 o menor igual a 90 entonces 
        result += String.fromCharCode(newAscii); //arroja su pocision en letra
      } else { //Si no se cumple la condicion devuelve mensaje con el valor agregado sin obtener el codigo ascii
        result += text[i]; 
    }
  }
    return result;
  },
   //DESCIFRAR
  decode: (offset, text2) => {

    let result = "";  //almacenara el caracter descifrado
    for (let i = 0; i < text2.length; i++) { //recorre los caracteres  
      let ascii = text2[i].charCodeAt(); //arroja el codigo ascii a mensaje  
      if (ascii >= 65 && ascii <= 90) {
        let newAscii = (((ascii + 65 - parseInt(offset)%26) % 26) + 65); //si el ascii es mayor o igual a 65 o menor igual a 90 entonces 
        result += String.fromCharCode(newAscii); //arroja su posicion en letra 
      } else { //Si no se cumple la condicion devuelve mensaje con el valor agregado sin obtener el codigo ascii
        result += text2[i];
      } 
    }
    return result;
  }, 
    
};
export default cipher;