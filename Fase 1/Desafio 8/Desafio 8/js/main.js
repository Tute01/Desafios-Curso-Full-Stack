window.onload=function(){
    console.log("Contenido del DOM cargado");
    let textArea= document.getElementById("origen");
    textArea.value="<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"

    textArea.oninput= function(){

        let arrayiInput = document.getElementsByTagName("input"); 

        for(let  i =0; i< arrayiInput.length; i++){
            arrayiInput[i].disabled= false; 
        }

        let boton=document.getElementsByTagName("button");
        boton[0].disabled=false; 
        

        

    }

    let divDestino= document.getElementById("destino");
    let botonReemplazar =document.getElementById("btn-reemplazar"); 
    let botones=document.getElementsByClassName("btn-agregar");

    botonReemplazar.onclick=function (){
        divDestino.innerHTML=textArea.value;
    }

    function agregar( n ){
        let contenido="";
        for(let i =0; i<n ;i++){
            contenido+= textArea.value
        }
        divDestino.innerHTML+=contenido; 
    }
    
    botones[0].onclick=() =>{
        agregar(1)
    }
    botones[1].onclick=() =>{
        agregar(5)
    }
    botones[2].onclick=() =>{
        agregar(10)
    }
    botones[3].onclick=() =>{
        let n =+prompt("Cantidad: ")
        if(!isNaN(n) &&Number.isInteger(n)&&n>0 ){
            agregar(n); 
        }
        else {
            alert("Ingreso Invalido"); 
        }
            
    }

    let botonesDestino =document.querySelectorAll(
        ".btn-vaciar ,.btn-convertir-a-mayusculas ,button"
    )

    botonesDestino[0].onclick=()=>{
        divDestino.innerHTML="";
    }
    botonesDestino[1].onclick=()=>{
         divDestino.innerHTML= divDestino.innerHTML.toUpperCase();
    }
    botonesDestino[2].onclick=()=>{
        divDestino.innerHTML= divDestino.innerHTML.toLowerCase();
        
    }

    let listaLi=document.getElementsByTagName("li");

    for(let i = 0 ; i<listaLi.length; i++){
        listaLi[i].innerHTML= "[Ok] "+listaLi[i].innerHTML;
    }





}

 