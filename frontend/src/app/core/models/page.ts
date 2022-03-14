import { Pageable } from "./pageable";

export class Page {
    content: Array<any>;
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

class Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
