import { Direction } from "./Direction"
import { Role } from "./Role"
import { Service } from "./Service"

export class User {
    cin : number
    email : string
    firstname : string
    lastname : string
    matricule : string 
    phone : string 
    role : Role 
    direction : Direction 
    service : Service 
}