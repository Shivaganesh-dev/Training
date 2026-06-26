export class BaseEntity{

    constructor(
        public id:number,
        public createdAt:Date=new Date()
    ){}

}