
export class Post {
    title: string;
    content: string;
    loveIts: number=0;
    created_at: Date;
    constructor(title: string,
        content: string,
        loveIts: number,
        created_at: Date) {
this.title=title;
this.content=content;
this.loveIts=loveIts;
   this.created_at=new Date();


    }
    public getTitle():string{
        return this.title;
    }
    public getContent():string{
        return this.content;
    }
    public getLoveits():number{
        return this.loveIts;

    }
    public getCreated_at():Date{
        return this.created_at;

    }

    public setTitle(title:string){
        this.title=title;
    }
    public setContent(content:string){
        this.content=content;
    }
    public setLoveits(loveIts:number){
        this.loveIts=loveIts;
    }
    public setCreated_at(created_at:Date){
 this.created_at=created_at;

    }




}