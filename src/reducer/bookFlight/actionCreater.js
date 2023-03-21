import { BOOKFLIGHT,DELETEBOOKED } from "./actionsType"
export const bookedFlight=(value)=>{
    return{
        type:BOOKFLIGHT,
        payload:value
    }
}
export const deleteBookded=(value)=>{
    return{
        type:DELETEBOOKED,
        payload:value
    }
}