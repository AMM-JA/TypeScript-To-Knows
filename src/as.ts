let vAny: any = 10;
let Unknown: unknown = 10;

let s1: string = vAny;
let s2: string = Unknown as string; //? reassign type

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;
/* console. log (vAny.foo()) ; */
// console. log (Unknown.foo());
