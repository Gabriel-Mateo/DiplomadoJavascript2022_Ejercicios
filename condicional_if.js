
//Ejercicios Javascript condicional if

//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir

var prompt = require('prompt');
//
// Start the prompt
//
prompt.start();
//
// Get two properties from the user: username and email
//  
const conducir = function () {

    console.log('\n\t INTRODUCA SU EDAD: \n');
    prompt.get(['edad'], function (err, result) {
        //
        // Log the results.
        //
        let edad = result.edad;

        if (edad < 18) {
            console.log('\n\t Eres Menor de edad, no puede conducir \n');
        }
        else {
            console.log('\n\tEres Mayor de edad, Puede conducir\n');
        }
    });

}

//conducir()

/****************************************************************************** */

//2. Pide una nota(número).Muestra la calificación según la

const mustraCalificacion = function () {

    console.log('\n \t INTRUDUC SU CALIFICACION DEL 0 AL 10 \n');

    prompt.get(['calificacion'], function (err, result) {

        
        let calificacion = result.calificacion;

        if (calificacion >= 0 && calificacion < 3) {
            console.log('\n\t Su calificacion es Muy deficiente \n');
        } else if (calificacion >= 3 && calificacion < 5) {
            console.log('\n\t Su calificacion es Insuficiente \n');
        } else if (calificacion >= 5 && calificacion <= 6) {
            console.log('\n\t Su calificacion es Suficiente \n');
        } else if (calificacion >= 6 && calificacion <= 7) {
            console.log('\n \t Su calificacion esta Bien \n');
        } else if (calificacion >= 7 && calificacion <= 9) {
            console.log('\n \t Su calificacion es Notable \n');
        } else if (calificacion >= 9 && calificacion <= 10) {
            console.log('\n \tSu calificacion es Sobresaliente \n');
        } else {
            console.log('\n \t El rango de Calificacion debe ser entre 0 y 10 \n');
            mustraCalificacion();
        }
    });
}

//mustraCalificacion();

//************************************************************************ */
/*3. En un estacionamiento cobran $ /. 1.500 por hora o fracción. 
Diseñe un algoritmo que determine cuánto debe pagar un cliente 
por el estacionamiento de su vehículo, conociendo el  tiempo de 
estacionamiento en horas y minutos*/

const costosPorEstacionamiento = function () {
    console.log('\n\tINTRODUCA HORA DE ENTRADA Y SALIDA');
    console.log('\t=================================== \n');
    prompt.get(['horaEntrada', 'horaSalida'], function (err, result) {
               
        let horaEntrada = parseInt(result.horaEntrada);
    
        let horaSalida = parseInt(result.horaSalida)


        let costo = 1.5;
        let horaEstacionado = 0;

        if (horaSalida < horaEntrada) {

            horaSalida += 12;

        }
        totalHora = horaSalida - horaEntrada;
        horaEstacionado = totalHora * costo;

        console.log('\n\tTotal Hora Parqueado: ' + totalHora);

        console.log('\n\tTotal a Pagar: ' + horaEstacionado+"\n");

    });
}

//costosPorEstacionamiento();
/**************************************************************************** */

const numeroParImpar = parImpar = function () {

    console.log('\n\nINTRODUZCA UN NUMERO PARA DETERMINAR SI ES POSITIVO O NEGATIVO\n');
    prompt.get(['numero'], function (err, result) {
        //
        // Log the results.
        //
        let numero = parseInt(result.numero);

        if (numero < 0) {
            console.log('\nIntroduca un numero Positivo\n');
            numeroParImpar();
        }
        else if (numero % 2 == 0) {

            console.log('\nEl numero ' + numero + '  es Par\n');
        } else {
            console.log('\nEl numero  ' + numero + ' es Impar\n');
        }

    });
}
//numeroParImpar();

/************************************************************************** */

const PrecioEspecial = function () {
    prompt.get(['cantidadDocena', 'precio'], function (err, result) {
        //
        // Log the results.
        //
        let cantidadDocena = parseInt(result.cantidadDocena);
        let precio = parseInt(result.precio);
        let descuentoEspecial = 0.15;
        let descuentoSinEspacial = 0.10;
        let obsequioPorAdicional = 0;

        let subtotal = 0;
        let descuento = 0;
        let total = 0;

        if (cantidadDocena > 3) {
            subtotal = cantidadDocena * precio;
            descuento = subtotal * descuentoEspecial;
            total = subtotal - descuento;
            obsequioPorAdicional = cantidadDocena - 3;
        } else if (cantidadDocena <= 3) {
            subtotal = cantidadDocena * precio;
            descuento = subtotal * descuentoSinEspacial;
            total = subtotal - descuento;

        }

        console.log('\nSub-Total :' + subtotal);
        console.log('\n Total de descuento : ' + descuento);
        console.log('\n Total a Pagar :' + total + '\n');

        console.log('\n Total de Unidad a Relagar por sobrecompra:  ' + obsequioPorAdicional + '  Unidad   \n');

    });
}
 //PrecioEspecial();

//************************************************************************ */
const diametroGrosoRueda = function () {

    console.log('\nIntroduca el Diámetro y Grosor de la Rueda en metros\n');

    prompt.get(['diametro', 'grosor'], function (err, result) {

        let diametro = parseFloat(result.diametro);

        let grosor = parseFloat(result.grosor);

        console.log(' Diametro: ' + diametro + ' Grosor:  ' + grosor);

        if (diametro > 1.4) {
            console.log('La rueda es para un vehículo grande\n');

        } else if (diametro <= 1.4 && diametro > 0.8) {
            console.log('La rueda es para un vehículo mediano \n');
        } else { console.log('La rueda es para un vehículo pequeño \n'); }

        if (diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8) {
            console.log('El grosor para esta rueda es inferior al recomendado\n');
        }

    });

}
//diametroGrosoRueda();


const menu = function () {
    console.clear(); 1
    
    console.log("\n \t\t SELECIONES UNA OPERACION A EJECUTAR DEL 1 AL 6:")
    console.log("\t\t =============================================== \n")
    console.log(" 1:  Saber si es mayor de 18 años para conducir: \n")
    console.log(" 2:  Motrar la calificación según la nota:\n")
    console.log(" 3:  Saber costo de estacionamiento a cobrar: \n")
    console.log(" 4   Determinar si un número es o no es, par positivo: \n")
    console.log(" 5:  Saber que descuendo ('15% o 10%') a aplicar por especial y unidad a regalar \n")
    console.log(" 6:  Saber a que Vehiculo corresponde una rueda por su diametro: \n")


    prompt.get(['opcion'], function (err, result) {
        //
        // Log the results.
        //
        console.log("\n 1:  Saber si es mayor de 18 años para conducir: \n")
        console.log("\n 2:  Motrar la calificación según la nota:\n")
        console.log("\n 3:  Saber costo de estacionamiento a cobrar: \n")
        console.log("\  4   Determinar si un número es o no es, par positivo: \n")
        console.log("\n 5:  Saber que descuendo ('15% o 10%') a aplicar por especial y unidad a regalar \n")
        console.log("\n 6:  Saber a que Vehiculo corresponde una rueda por su diametro: \n")


        let opcion = result.opcion;

        if (opcion == 1) {
            conducir();
        }
        else if (opcion == 2) {
            mustraCalificacion();
        } else if (opcion == 3) {
            costosPorEstacionamiento();
        } else if (opcion == 4) {
            numeroParImpar();
        } else if (opcion == 5) {
            PrecioEspecial();
        } else if (opcion == 6) {
            diametroGrosoRueda();

        } else{ 
            console.log("\nElija una Opcion del 1 al 6\n");
            menu();
        }

    });
}

menu();