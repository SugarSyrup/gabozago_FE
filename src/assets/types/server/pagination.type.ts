export interface TPagination<T> {
  next: string | null;
  previous: string | null;
  results: T[];
}
