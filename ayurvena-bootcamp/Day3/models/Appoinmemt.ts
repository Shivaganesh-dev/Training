import { BaseEntity } from "./BaseEntity";

export class Appointment extends BaseEntity{

    constructor(
        id:number,
        public patientId:number,
        public doctorId:number,
        public date:string
    ){
        super(id);
    }

}