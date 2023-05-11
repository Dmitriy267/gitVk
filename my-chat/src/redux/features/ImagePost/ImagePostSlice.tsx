import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageAllMyPost {
    id:number;
    img:string;
    altDescript:string;
}
export interface ImagePostState{
    imagePost:ImageAllMyPost[];
}

const initialState: ImagePostState={
    imagePost:[]
}
export const ImagePostSlice=createSlice({
    name:'ImagePost',
    initialState,
    reducers:{
        addImagePost:(state, action:PayloadAction<{id:number, img:string, altDescript:string}>)=>{
          const myImage=state.imagePost.find((item)=>item.id===action.payload.id)
          if(!myImage){
            state.imagePost.push({
                id:action.payload.id,
                img:action.payload.img,
                altDescript:action.payload.altDescript,
            })
          }
        },
    }
})

export const {addImagePost}=ImagePostSlice.actions;
export const ImagePostSelector=(state:ImagePostState)=>state.imagePost;
export default ImagePostSlice.reducer;