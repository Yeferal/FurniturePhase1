import { Piece } from "./piece";

export class Plan {

    id: number;
    name: string;
    description: string;
    cost: number;
    assignments?: Array<Assigment> = [];
    status: false;
}


export class Assigment {
    amount: number;
    id: number;
    piece: Piece;
    plan: Plan
}