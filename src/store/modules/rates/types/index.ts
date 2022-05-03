export type Rates = {
    [key: string]: number
}
export type InitialState = {
    rates: Rates | null,
    status: string,
    error: string,
    loading: boolean,
}