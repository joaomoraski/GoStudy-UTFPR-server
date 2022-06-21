class Room{
    id?: string;
    fk_id_institute: string;
    number: number;

    constructor({fk_id_institute, number}: Room){
        return Object.assign(this, {
            fk_id_institute,
            number
        });
    }
    
    static create(fk_id_institute: string, number: number, id?:string): Room {
        const room = new Room({
            id,
            fk_id_institute,
            number
        });
        return room;
    }
}

export { Room };