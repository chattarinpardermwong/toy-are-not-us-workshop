export class Toy {
    id :number;
    price: number;
    name: string;
    age: string;
    gender: string;
    quantity: number;
    status: boolean;

    constructor(
        id:number,
        price: number,
        name: string,
        age: string,
        gender: string,
        quantity: number,
        status: boolean

    ) {
        this.id = id;
        this.price = price,
            this.name = name,
            this.age = age,
            this.gender = gender
        this.quantity = quantity;
        this.status = status;
    }
}

export class ToyDisplay {
    name: string;
    age: string;
    gender: string;
    price: number;
    quantity: number;
    status: boolean;

}