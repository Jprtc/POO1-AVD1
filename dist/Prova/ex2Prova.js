"use strict";
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo(numero) {
        this.numero = numero;
    }
    ConversaoDeUnidadesDeTempo.convertMinutesToSeconds = function (numero) {
        console.log(numero + " minutos s\u00E3o " + numero * 60 + " segundos");
    };
    ConversaoDeUnidadesDeTempo.convertHoursToMinutes = function (numero) {
        console.log(numero + " horas s\u00E3o " + numero * 60 + " minutos");
    };
    ConversaoDeUnidadesDeTempo.convertDaysToHours = function (numero) {
        console.log(numero + " dias s\u00E3o " + numero * 24 + " horas");
    };
    ConversaoDeUnidadesDeTempo.convertWeekToDays = function (numero) {
        console.log(numero + " semanas s\u00E3o " + numero * 7 + " dias");
    };
    ConversaoDeUnidadesDeTempo.convertMonthToDays = function (numero) {
        console.log(numero + " meses s\u00E3o " + numero * 30 + " dias");
    };
    ConversaoDeUnidadesDeTempo.convertYearToDays = function (numero) {
        console.log(numero + " anos s\u00E3o " + numero * 365 + " dias");
    };
    return ConversaoDeUnidadesDeTempo;
}());
ConversaoDeUnidadesDeTempo.convertMinutesToSeconds(2);
ConversaoDeUnidadesDeTempo.convertHoursToMinutes(3);
ConversaoDeUnidadesDeTempo.convertDaysToHours(2);
ConversaoDeUnidadesDeTempo.convertWeekToDays(2);
ConversaoDeUnidadesDeTempo.convertMonthToDays(3);
ConversaoDeUnidadesDeTempo.convertYearToDays(2);
