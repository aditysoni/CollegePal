import {configureStore} from '@reduxjs/toolkit' ;
import userSlice from './slices/users'
const Store = configureStore(
{
    reducer : {
        name :userSlice ,
        token : userSlice 
    } ,
}) ;


export default Store ;
