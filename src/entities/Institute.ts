class Institute{
    id?: string;
    name: string;
    city: string;
    telephone: string;
    opening_time: string;
    closing_time: string;

    constructor({name, city, telephone, opening_time, closing_time}: Institute){
        return Object.assign(this, {
            name,
            city,
            telephone,
            opening_time,
            closing_time
        });
    }

    static create(name:string, city:string, telephone:string, opening_time:string, closing_time:string, id?:string) {
        const institute = new Institute({
            id,
            name,
            city,
            telephone,
            opening_time,
            closing_time
        });
        return institute;
    }
}

export { Institute };