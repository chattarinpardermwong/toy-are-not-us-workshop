export class Shipping {
    id : number
    shipName:string;
    shipFee:number;
    constructor(id: number,shipName :string, shipFee:number){
        this.shipName = shipName;
        this.shipFee = shipFee;
        this.id = id;
    }
}
