export class Pageable {

    sort: Sort;
    offset: number;
        pageNumber: number;
        pageSize: number;
        unpaged: boolean;
        paged: boolean;

}


class Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}