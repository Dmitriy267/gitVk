import React, {useState} from 'react';
import styles from './PostAddBlock.module.scss';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addPost } from '../../redux/features/Post/postSlice';
import {AddImagePostPage} from '../../components/AddImagePostPage/AddImagePostPage';
function PostAddBlock (){
    const [myPost, setMyPost]=useState('');
    const [imgPostAdd, setImagePost]=useState(false);
    const dispatch=useAppDispatch();
    return (
        <div className={styles.wrapper__div}>
        <div className={styles.addText__div}>
        <textarea value={myPost} onChange={e=>setMyPost(e.target.value)} ></textarea>
        </div>
        <div className={styles.GroupButton__div}>
        <button onClick={()=>dispatch(addPost(myPost))}>Опубликовать</button>
        <button onClick={()=>setImagePost(imgPostAdd=>!imgPostAdd)}>Добавить фото</button>
        </div>
        {imgPostAdd?<AddImagePostPage/>:null}
        </div>
    )
}
export default PostAddBlock;