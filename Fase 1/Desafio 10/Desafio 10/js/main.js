let numeros = document.getElementsByClassName("numero"); 
let display = document.querySelector(".display-contenido");
let operadores = document.querySelectorAll(".operador");
let num1 = null;
let num2 = null;
let op = null;  
let decimal = document.querySelector(".decimal");
let igual = document.querySelector(".igual"); 

display.onclick = () => {
    display.textContent = "0"; 
    op = null; 
    num1 = null;
    num2 = null;
};

decimal.onclick = () => {

    let actual = display.textContent.trim();
    let ultimo = actual.slice(-1);

    
    if (["+", "-", "*", "/"].includes(ultimo)) {
        evaluarNuevoContenido(actual + "0.");
        return;
    }

    let partes = actual.split(/[+\-*/]/);
    let num = partes[partes.length - 1];

    if (num.includes(".")) return;

    if (actual === "0") {
        evaluarNuevoContenido("0.");
        return;
    }

    evaluarNuevoContenido(actual + ".");
};

for (let numero of numeros) {
    numero.onclick = () => {

        let actual = display.textContent.trim();

        let nuevoContenido = (actual === "0") 
            ? numero.value
            : actual + numero.value;
       
        evaluarNuevoContenido(nuevoContenido);
    };
}

for (let operador of operadores) {
    operador.onclick = () => {

        let actual = display.textContent.trim();
        let ultimo = actual.slice(-1);

        
        if (ultimo === ".") return;

        
        if (actual === "0") return;

        if (op === null) {

            if (!evaluarNuevoContenido(actual + operador.value)) return;

            num1 = +actual;
            op = operador.value;
        }
    };
}

const evaluarNuevoContenido = (nuevoContenido) => {
    
    if (nuevoContenido.length > 13) {
        alert("Limite de caracteres superado");
        return false;
    } else {
        display.textContent = nuevoContenido;
        return true;
    }
};

igual.onclick = () => {

    

    let texto = display.textContent.trim();

    if (texto[0] === "-") {
        texto = "0" + texto;
    }

   let formula = texto.split(/([+\-x/])/);

    if (formula.length < 3) {
        alert("Ingreso inválido");
        return;
    }

    let b = +formula[formula.length - 1];

    
    if (isNaN(b)) {
        alert("Ingreso inválido");
        return;
    }

    
    if (!op || !["+", "-", "x", "/"].includes(op)) {
        alert("Ingreso inválido");
        return;
    }

    
    if (b === 0 && op === "/") {
        alert("Math error");
        display.textContent = "0";
        op = null;
        num1 = null;
        num2 = null;
        return;
    }

    let resultado = calcular(num1, op, b);

  
    if (isNaN(resultado) || !isFinite(resultado)) {
        alert("Math error");
        display.textContent = "0";
        op = null;
        num1 = null;
        num2 = null;
        return;
    }

    if (evaluarNuevoContenido(String(resultado))) {
        num1 = resultado;
        op = null;
        num2 = null;
    }
}

const calcular=(a, operando, b)=>{
    switch (op) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "x":
            return a * b;

        case "/":
            return a / b;

        default:
            return NaN;
    }
}