function myFunction() {
    let b = document.getElementById("anni").value;
    let a = document.getElementById("distanza").value;

    if (b == 0) {
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + a * 0.21 + " + iva";
    }
    else if (b <= 18) {
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + a * 0.21 * 80 / 100 + " + iva";
    }
    else if (b >= 65) {
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + a * 0.21 * 60 / 100 + " + iva";
    }
    else {
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + a * 0.21 + " + iva";
    }
}