import { BaseEntity } from "./BaseEntity";

export class Doctor extends BaseEntity{

    constructor(
        id:number,
        public name:string,
        public specialization:string
    ){
        super(id);
    }

}