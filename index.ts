let x: number = 12;
let y: string = "Ella";

const ridingDownTheAlley: boolean = true;
let a: any;

type validType = number | string | boolean;

const addition = (n1: number, n2: string) => {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    } else {
        console.log("Error not a number");
    }
};

interface Inventory {
    shape: string;
    color: string;
    size?: validType;
}

const obj: Inventory = {
    shape: "circle",
    color: "red",
    size: 100,
};

interface extendedInventory extends Inventory {
    itemId: number;
}

let lsist: number[] = [1, 2, 3];

let list2: Array<number | String> = [1, 2, 3];
let list3: [string, number, string] = ["2", 2, "2"];

interface DciStudsInterface {
    name: string;
    age?: number;
    role: string;
    isTeacher: boolean;
}
