import { AnyAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Frends} from '../../models/Frends'


interface FrendsState {
    frends:Frends[],
    loading:boolean;
    hasError:null|string;
}
const initialState: FrendsState={
    frends:[],
    loading:false,
    hasError:null
}
export const FrendsSlice=createSlice({
    name:'frends',
    initialState,
    reducers:{
        getFrends:(state, action:PayloadAction<Frends>)=>{
       
        
           
        },
        filterFrends:(state, action:PayloadAction<Frends>)=>{
            const itemId=state.frends.findIndex((item)=>item.id===action.payload.id);
            state.frends.splice(itemId, 1)
        }
      
    },
    extraReducers: (builder)=>{
        builder
      .addCase(FetchFrendsAll.pending, (state)=>{
            state.loading=true;
            state.hasError=null;

        })
       .addCase(FetchFrendsAll.fulfilled, (state, action)=>{
            state.loading=false;
            state.frends=action.payload;

        })
       .addCase(FetchFrendsAll.rejected, (state, action)=>{
            state.loading=false

        })
        .addMatcher(isError, (state, action:PayloadAction<string>)=>{
            state.loading=false;
            state.hasError=action.payload

        })

    }
})
function isError(action: AnyAction){
return action.type.endsWith('rejected')
}

export const FetchFrendsAll=createAsyncThunk<Frends[], undefined, {rejectValue:string}>(
    'frends/FetchFrends',
    async function (_, {rejectWithValue}) {
        const response =await fetch ('/frends');
        if(!response.ok){
            return rejectWithValue('Ошибка на сервере')
        }
        const data=await response.json();
        return data;
    }
) 

export const {getFrends, filterFrends}=FrendsSlice.actions;
export const frendsSelector=(state:FrendsState)=>state.frends;
export default FrendsSlice.reducer;