import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState{
    user:{
        login:string;
        age:number;
        city:string;
        univer:string;
    }
}
const initialState: UserState={
    user:{
        login:'',
        age:0,
        city:'',
        univer:''
    }
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<string>)=>{
            state.user.login=action.payload;
        },
        ageUser:(state, action:PayloadAction<number>)=>{
            state.user.age=action.payload
        },
        cityUser: (state, action:PayloadAction<string>)=>{
            state.user.city=action.payload;
        },
        univerUser:(state, action:PayloadAction<string>)=>{
            state.user.univer=action.payload;

        }
    }
})

export const {addUser, ageUser, cityUser, univerUser}=userSlice.actions;
export const userSelector=(state:UserState)=>state.user;
export default userSlice.reducer;