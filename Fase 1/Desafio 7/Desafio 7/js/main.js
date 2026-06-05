let listaBotones = document.querySelectorAll("button"); 
let listaGatitos =["😺","😸","😹"]
let contenidoDiv=[];  

function agregarGatitos(indice){

    let gatitoRepetido=1;
    

    for(let i=contenidoDiv.length-1; i>=0 && i>contenidoDiv.length-6;i-- ) {
         
        if(contenidoDiv[i]==listaGatitos[indice]){
            gatitoRepetido++
          
        }
        else{
            break;  
        }
    
    }

    if(gatitoRepetido==6){
        contenidoDiv=contenidoDiv.filter(elemento => elemento=="⬛")
        contenidoDiv.push("⬛")
    }
    else{
        contenidoDiv.push(listaGatitos[indice]); 
    }
    
    document.getElementById("imprimir").textContent=contenidoDiv.join(""); 


}

for(let i=0 ;i<listaBotones.length;i++){
    listaBotones[i].addEventListener("click",()=> agregarGatitos(i))
}