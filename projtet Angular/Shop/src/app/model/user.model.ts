import { Role } from "./role.model";

export class User {
    username:string;
    password:string;
    nom:string;
    prenom:string;
    naissance:Date;
    roles:Role[];
}