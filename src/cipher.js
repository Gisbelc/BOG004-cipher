const cipher =  {
    //CIFRAR 
    encode: (mensaje, desplazamiento) => { 
      let resultado = "";
      for (let i = 0; i < mensaje.length; i++) {
        let ascii = mensaje[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90) {        
          let newAscii = (((ascii - 65 + parseInt(desplazamiento)) % 26) + 65);
          resultado += String.fromCharCode(newAscii);
        } else {
          resultado += mensaje[i];
        }
      }
      return resultado;
    },

    decode: (mensaje2, desplazamiento) => {
      let resultado = " ";
      for (let i = 0; i < mensaje2.length; i++) {
        let ascii = mensaje2[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90) {
          let newAscii = (((ascii + 65 - parseInt(desplazamiento)) % 26) + 65);
          resultado += String.fromCharCode(newAscii);
        } else {
          resultado += mensaje2[i];
        } 
      }
      return resultado;
    },

      
};
export default cipher;
