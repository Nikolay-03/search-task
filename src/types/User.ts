export interface IUser{
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    address:address
}
interface address {
    city:string
}
export interface UserCardProps{
    user:IUser
}