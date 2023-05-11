import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PostState{
  post:string;
}
const initialState: PostState={
    post:''
}
export const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:(state, action:PayloadAction<string>)=>{
            state.post=action.payload;
        },
    }
})

export const {addPost}=postSlice.actions;
export const postSelector=(state:PostState)=>state.post;
export default postSlice.reducer;