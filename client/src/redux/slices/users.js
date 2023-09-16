import { createSlice } from "@reduxjs/toolkit";


const initialState = {token:null , isloggedin : false } ;

 const userSlice = createSlice({
    name :'user' , 
    initialState , 
    reducers : 
    {

     loginuse :(state , action)=>{state.name = action.payload} ,
     tokenauth :(state, action)=>{state.token = action.payload} ,
}
    
})

export const {loginuse , tokenauth} = userSlice.actions ;  
export default userSlice.reducer ; 