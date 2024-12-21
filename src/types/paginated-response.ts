export interface PaginationInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface PaginatedResponse<T> {
    info: PaginationInfo;
    results: T[];
}
