export interface TodoPayload {
    title: string
    completed: boolean
}

export interface TodoInterface extends TodoPayload {
    userId: number
    id: number
}

export type TodosInterface = TodoInterface[]
