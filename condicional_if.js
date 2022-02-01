
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
    prompt.get(['edad'], function (err, result) {
        //
        // Log the results.
        //
        let edad = result.edad;

        if (edad < 18) {

            console.log('Eres Menor de edad, no puede conducir');
        }
        else {
            console.log('Eres Mayor de edad, Puede conducir');
        }
    });

}

//conducir()

/****************************************************************************** */

//2. Pide una nota(número).Muestra la calificación según la

const mustraCalificacion = function () {

    prompt.get(['calificacion'], function (err, result) {

        let calificacion = result.calificacion;

        if (calificacion >= 0 && calificacion < 3) {
            console.log('\n Su calificacion es Muy deficiente \n');
        } else if (calificacion >= 3 && calificacion < 5) {
            console.log('\n Su calificacion es Insuficiente \n');
        } else if (calificacion >= 5 && calificacion <= 6) {
            console.log('\n Su calificacion es Suficiente \n');
        } else if (calificacion >= 6 && calificacion <= 7) {
            console.log('\n Su calificacion esta Bien \n');
        } else if (calificacion >= 7 && calificacion <= 9) {
            console.log('\n Su calificacion es Notable \n');
        } else if (calificacion >= 9 && calificacion <= 10) {
            console.log('\n Su calificacion es Sobresaliente \n');
        } else {
            console.log('\n el rango de Calificacion debe ser entre 0 y 10 \n Intruduca calificacion');
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
    prompt.get(['horaEntrada', 'horaSalida'], function (err, result) {
        //
        // Log the results.
        //
        let horaEntrada = parseInt(result.horaEntrada);
        let horaSalida = parseInt(result.horaSalida)


        let costo = 1.5;
        let horaEstacionado = 0;

        if (horaSalida < horaEntrada) {

            horaSalida += 12;

        }
        totalHora = horaSalida - horaEntrada;
        horaEstacionado = totalHora * costo;

        console.log('Total Hora Parqueado: ' + totalHora);

        console.log('Total a Pagar: ' + horaEstacionado);

    });
}

//costosPorEstacionamiento();
/**************************************************************************** */

const numeroParImpar = parImpar = function () {
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
diametroGrosoRueda();