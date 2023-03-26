export interface PostBodyInterface {
    title: string
    body: string
}
export interface PostInterface extends PostBodyInterface {
    "userId": number,
    "id": number
}

export interface PostCommentsInterface {
    "postId": number,
    "id": number,
    "name": string
    "email": string
    "body": string
}
