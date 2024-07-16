function simulacroPlazoFijo(){
    alert(`Bienvenido al Banco! 
        Vamos a hacer una simulacón de un plazo fijo. Esto depende de varios factores como la cantidad de días, el monto a depositar, la tasa nominal anual, etc.`);
    
    let monto;
    do {
        monto = parseInt(prompt("Ingresé la cantidad de pesos que quiere depositar, con un mínimo de $1500"));
    } while(monto < 1500);

    let planPlazoFijo;
    do{
        planPlazoFijo = prompt(`Según el plan que tenga, cambia la Tasa Nominal Anual (TNA)
        Plan Bronze --> 30% de TNA
        Plan Plata  --> 35% de TNA
        Plan Oro    --> 40% de TNA
        ¿Con qué plan cuenta usted?`);
    
        planPlazoFijo = planPlazoFijo.toLowerCase();


    }while(planPlazoFijo !== "oro" && planPlazoFijo !== "plata" && planPlazoFijo !== "bronze");

    let tasaNominal;
    switch(planPlazoFijo){
        case "bronze":
            tasaNominal = 0.30; // 30% = 0.30
        case "plata":
            tasaNominal = 0.35; // 35% = 0.35
        case "oro":
            tasaNominal = 0.40; // 40% = 0.40
    }

    let plazo;
    do{
        plazo = parseInt(prompt("¿Cuantos días quiere dejar su plata en el plazo fijo? Escriba solamente la cantidad de días, mínimo 30 días y máximo 365 días."))
    }while(plazo < 30 || plazo > 365);

    let calculoTasa = parseFloat(parseFloat((monto * (tasaNominal * plazo/365))).toFixed(2));
    let resultado = monto + calculoTasa;

    alert("Una vez hecho los calculos sacamos que tu monto de $" + monto + " en un plazo de " + plazo + " con el Plan " + planPlazoFijo.toUpperCase() + " nos da como ganancia $" + calculoTasa + " obteniendo un total de $" + resultado);

    if (confirm("Te gustaría volver a simular un plazo fijo?")) {
        simulacroPlazoFijo();
    }
}

simulacroPlazoFijo();