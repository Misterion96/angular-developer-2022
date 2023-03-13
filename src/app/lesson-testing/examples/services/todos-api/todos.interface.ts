export interface TodoInterface {
    userId: number
    id: number
    title: string
    completed: boolean
}

export type TodosInterface = readonly TodoInterface[]
