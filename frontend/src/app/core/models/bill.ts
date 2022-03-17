import { Client } from "./client";
import { Furniture } from "./furniture";
import { Profile } from "./profile"

export class Bill {

    id: number;
    dateTime: Date;
    profile?: Profile;
    total: number;
    client?: Client;
    

}
