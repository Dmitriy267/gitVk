import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../redux/features/User/userSlice';
import postReduser from '../redux/features/Post/postSlice';
import ImagePostReduser from '../redux/features/ImagePost/ImagePostSlice';
import FrendsReduser from '../redux/features/FrendsList/FrendsSlice';
import MyBestFrendReduser from '../redux/features/MyBestFrend/MyBestFrendSlice';
import AvtorizationReduser from '../redux/features/Avtorization/AvtorizationSlice';
export const store= configureStore({
  reducer: {
   user:userReducer,
   post:postReduser,
   imagePost:ImagePostReduser,
   frendsList:FrendsReduser,
   myBestFrend:MyBestFrendReduser,
   Avtorization:AvtorizationReduser,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch