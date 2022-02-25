export class ProductCategory {
    /*
    public id: number = 0;
    public name: string = "";

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }
    */
    constructor(public id:number, public name:string) {
    }

    getCategoryComplexName(): string {
        return this.id + this.name;
    }

}
