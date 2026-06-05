const inputs = document.querySelectorAll("input"); 

const errores = document.querySelectorAll("p"); 

let  datos = {

    nombre:null, 
    edad:null,
    email:null, 

}

let boton =  document.querySelector("button");

inputs[0].addEventListener("input", e =>{

    const regexNombre = /^[a-zA-Z]{3,20}$/;
    let input = e.target.value; 
    
    if (regexNombre.test(input)) {

        datos.nombre= input; 
        errores[0].textContent=""; 
        
    }
    else{

        errores[0].textContent="Nombre invalido. debe de contener  solo letras y contener entre 3 y 20 caracteres"
        datos.nombre=null

    }

    validarForm(); 

});

inputs[2].addEventListener("input",e =>{

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input = e.target.value; 

    if (regexEmail.test(input)) {

        datos.email= input; 
        errores[2].textContent=""; 
        
    }
    else{

        errores[2].textContent="Email invalido. el formato debe de ser: nombre@direccion.com"
        datos.email= null; 
    }

    validarForm(); 

});

inputs[1].addEventListener("input", e =>{

    const regexEdad = /^(1[89]|[2-9][0-9]|1[01][0-9]|120)$/;
    let input = e.target.value; 

    if (regexEdad.test(input)) {

        datos.edad= input; 
        errores[1].textContent=""; 
        
    }
    else{

        errores[1].textContent="Edad invalido. El valor debe de estar entre 18 y 120 años"
        datos.edad= null;

    }

    validarForm(); 

});

boton.addEventListener("click", e => {
    e.preventDefault(); 
    console.log(datos);
})

function validarForm(){
    
    if (datos.nombre !== null && datos.edad !== null && datos.email !== null)
        boton.disabled= false; 
    else
        boton.disabled= true;

}
