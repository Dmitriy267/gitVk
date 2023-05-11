import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type MyFrend={
    id:number,
    alt:string,
    img:string,
    name:string;
    age?: string,
    city?:string,
    univer?:string,

}
interface MyFrendState{
    myFrend:MyFrend[]
}
const initialState: MyFrendState={
    myFrend:[]
}
export const MyBestFrendSlice=createSlice({
    name:'myFrend',
    initialState,
    reducers:{
        getInfoMyFrend:(state, action:PayloadAction<MyFrend>)=>{
           state.myFrend.push({
               id: action.payload.id,
               alt: action.payload.alt,
               img: action.payload.img,
               name: action.payload.name,
               age:action.payload.age,
               city:action.payload.city,
               univer:action.payload.univer
           })
        }
    },
})
export const {getInfoMyFrend}=MyBestFrendSlice.actions; 
export const MyFrendsSelector=(state:MyFrendState)=>state.myFrend;
export default MyBestFrendSlice.reducer;