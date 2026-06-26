export class BaseService<T>{

    protected data:T[]=[];

    add(item:T){
        this.data.push(item);
    }

    getAll():T[]{
        return this.data;
    }

}