import { Bill } from "./bill";
import { Furniture } from "./furniture";

export class BillDetail {

    id: number;
    bill?: Bill;
    furniture?: Furniture;
    dateReturn?: any;
    priceSale: number;

}
