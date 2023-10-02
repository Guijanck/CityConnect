import { BaseCrudProxy } from "./base-crud.proxy";

export interface UserProxy extends BaseCrudProxy {
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    birthday: Date;
    phone: string;
    cpf: string;
    city: string;
    state: string;
    location: {
        longitude: string,
        latitude: string
    };
}
