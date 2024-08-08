import {data} from "../data";

export async function GET({id}:{id:string}){
    return data.filter((p)=>p.id===id);
}