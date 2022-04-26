interface IUserDTO{
    fk_id_institute: string;
    name: string;
    ra: string;
    telephone: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export { IUserDTO };