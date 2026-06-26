import { BaseEntity } from "./BaseEntity";

export class Patient extends BaseEntity{

    constructor(
        id:number,
        public name:string,
        public age:number,
        public mobile:string
    ){
        super(id);
    }

}