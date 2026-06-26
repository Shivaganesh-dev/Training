export class QueueService{

    private queue:string[]=[];

    add(name:string){

        this.queue.push(name);

    }

}