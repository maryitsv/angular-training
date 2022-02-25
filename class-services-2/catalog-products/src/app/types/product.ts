export interface Product {
    id: number;
    name: string;
    available: boolean;
    color?: string; // ? to indicate something is optional it can be defined or undefined
    sizes?: string[]; // you can have arrays of ...
    details?: { // you can have objects
        description: string;
        urlPictures: string[];
        other: any; // you can have any which means whatever thing the transpiler is not going to do anything to try to guess what is this
        objectInternalStructure: unknown;// unknown the transpiler is going to try to guess what is this
        dictionary:{ // to have dictionaries
            [key:string]: string;
        },
        presentation: "box" | "pyloras" | "syrup"
    }
}