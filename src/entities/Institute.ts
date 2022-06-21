class Institute{
    id?: string;
    name: string;
    city: string;
    telephone: string;
    openingTime: string;
    closingTime: string;

    constructor({name, city, telephone, openingTime, closingTime}: Institute){
        return Object.assign(this, {
            name,
            city,
            telephone,
            openingTime,
            closingTime
        });
    }

    static create(name:string, city:string, telephone:string, openingTime:string, closingTime:string, id?:string) {
        const institute = new Institute({
            id,
            name,
            city,
            telephone,
            openingTime,
            closingTime
        });
        return institute;
    }
}

export { Institute };