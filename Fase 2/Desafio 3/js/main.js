let flag = false; 
let idIntervalo 
document.querySelector('input[type="checkbox"]').addEventListener('click', e =>{

    flag= e.target.checked; 
    document.querySelector('#cotizacion').disabled= flag;  
    if(flag){
        cotizacionAutomatica(); 
        idIntervalo=setInterval(cotizacionAutomatica,2000);
        document.querySelector('form p').style.display = 'block';
    }
    else{
        clearInterval(idIntervalo); 
        document.querySelector('form p').style.display = 'none';
    }
}) ; 



function convertirUSD(){

    let monto= Number(document.querySelectorAll('input[type="number"]')[0].value);
    let cotizacion= Number(document.querySelectorAll('input[type="number"]')[1].value);
    let output =  document.querySelector('#output'); 
    output.textContent=  cotizacion===0 ? "El valor del dolar no puede ser 0" :  (monto/cotizacion).toFixed(2); 

}



function actualizarCotizacion(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.bluelytics.com.ar/v2/latest',true); 
    xhr.addEventListener('load', _=>{
        let cotizacion = JSON.parse(xhr.responseText).blue.value_sell; 
        document.querySelector('#cotizacion').value= cotizacion
        convertirUSD(); 
        
    });
    
    xhr.send(); 

} 


document.addEventListener('DOMContentLoaded', _ =>{
    actualizarCotizacion(); 
})

document.querySelector('#monto').addEventListener('input',convertirUSD);
document.querySelector('#cotizacion').addEventListener('input',convertirUSD); 

function cotizacionAutomatica(){
    actualizarCotizacion(); 
    const fecha = new Date();
    let p = document.querySelector('form p');
    p.textContent=     `Última actualización: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

}