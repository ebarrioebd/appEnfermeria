

function calcular() {
    const ml = document.getElementById("ml").value;
    const equipo = document.getElementById("selectEquipo").value;
    const tiempo = document.getElementById("tiempo").value;
    const hm = tiempo.split(":");
    console.log(ml, equipo, tiempo, hm)

    let resultado = (equipo * ml) / (60 * parseInt(hm[0]) + parseInt(hm[1]));
    if (isNaN(resultado)) {
        alert("Rellene los campos correctamente");
        console.log("Resultado:", resultado, " gts");
        document.getElementById("res").innerHTML = `
        <div style="font-size:15px;color:red;">Rellene segun esta info:</div>
        <div style="font-size:15px">ml:(numero)</div>
        <div style="font-size:15px">equipo:(Macro,Normo,Micro)</div>
        <div style="font-size:15px">tiempo:(hora:minutos)</div>`;
    } else {
        console.log("Resultado:", resultado, " gts");
        document.getElementById("res").innerHTML = "<h2>" + resultado.toFixed(3) + " gts</h2>";
    }
} 