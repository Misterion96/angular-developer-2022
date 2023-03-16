export interface TestingTodoPayload {
    title: string
    completed: boolean
}

export interface TestingTodoInterface extends TestingTodoPayload {
    userId: number
    id: number
}

export type TestingTodosInterface = TestingTodoInterface[]
