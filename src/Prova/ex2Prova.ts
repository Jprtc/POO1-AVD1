class ConversaoDeUnidadesDeTempo{
    public numero:number

    constructor(numero:number){
        this.numero = numero;
    }


   public static convertMinutesToSeconds(numero:number) {
        console.log(`${numero} minutos são ${numero*60} segundos`)
    }
    public static convertHoursToMinutes(numero:number) {
        console.log(`${numero} horas são ${numero*60} minutos`)
    }
    public static convertDaysToHours(numero:number) {
        console.log(`${numero} dias são ${numero*24} horas`)
    }
    public static convertWeekToDays(numero:number) {
        console.log(`${numero} semanas são ${numero*7} dias`)
    }
    public static convertMonthToDays(numero:number) {
        console.log(`${numero} meses são ${numero*30} dias`)
    }
    public static convertYearToDays(numero:number) {
        console.log(`${numero} anos são ${numero*365} dias`)
    }
}

ConversaoDeUnidadesDeTempo.convertMinutesToSeconds(2)
ConversaoDeUnidadesDeTempo.convertHoursToMinutes(3)
ConversaoDeUnidadesDeTempo.convertDaysToHours(2)
ConversaoDeUnidadesDeTempo.convertWeekToDays(2)
ConversaoDeUnidadesDeTempo.convertMonthToDays(3)
ConversaoDeUnidadesDeTempo.convertYearToDays(2)
