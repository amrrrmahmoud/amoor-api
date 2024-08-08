import {isEnum, Min} from "class-validator"
export class CreateAmoorDto{
    id: string;
    //@Min(10, {message: "All Amoors at least 10/10"})
    coolLevel: number;
}