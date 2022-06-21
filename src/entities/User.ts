class User {
    id?: string;
    fk_id_institute: string;
    name: string;
    ra: string;
    telephone: string;
    email: string;
    password: string;
    isAdmin: boolean;

    constructor({ fk_id_institute, name, ra, telephone, email, password, isAdmin }: User) {
        return Object.assign(this, {
            fk_id_institute,
            name,
            ra,
            telephone,
            email,
            password,
            isAdmin
        });
    }

    static create(fk_id_institute: string, name: string, ra: string, telephone: string, email: string, password: string, isAdmin: boolean, id?: string) {
        const user = new User({
            id,
            fk_id_institute,
            name,
            ra,
            telephone,
            email,
            password,
            isAdmin
        });
        return user;
    }
}

export { User };