export type Counts = Record<string, string>;
export const metrics: {key:string;label:string;help:string}[];
export function diagnoseCalls(before:Counts, after:Counts, comparable:boolean, linkedCalls:boolean): {
  errors:string[]; rows:{key:string;label:string;help:string;before:number;after:number;change:number;percent:number|null}[];
  rates:{label:string;before:number;after:number;points:number;small:boolean}[]; findings:string[];
};
