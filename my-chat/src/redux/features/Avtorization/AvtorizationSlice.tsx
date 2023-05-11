import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AvtorizationState {
    myLogin:string;
    myPassword:string;   
}
const initialState: AvtorizationState={
    myLogin: 'Дмитрий',
    myPassword: '111111'
}
export const AvtorizationSlice=createSlice({
    name:'avtorization',
    initialState,
    reducers:{
        RepeatAvtorization:(state, action:PayloadAction<string>)=>{
            state.myLogin=action.payload;
            state.myPassword=action.payload;
          
        }

    }
})


export const {RepeatAvtorization}=AvtorizationSlice.actions;
export const AvtorizationLoginSelector=(state:AvtorizationState)=>state.myLogin;
export const AvtorizationPasswordSelector=(state:AvtorizationState)=>state.myPassword;
export default AvtorizationSlice.reducer;