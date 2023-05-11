import React, { useEffect, useState } from 'react';
import styles from './SearchForm.module.scss';
import FrendsList from '../../components/FrendsList/FrendsList';
import axios from 'axios';

function SearchForm (){
    const [frends, setFrends]=useState<any[]>([]);
    const [loading, setLoading]=useState (false);
    const [isError, setIsError]=useState (false);
    const [searchValue, setSearchValue]=useState('')

const getFrends=async()=>{
    try{
        const res=await axios.get('/frends')
        setFrends(res.data);
        setLoading (false)
    }catch (error){
        setLoading (false)
        setIsError (true)

    }
}
useEffect (()=>{
    getFrends()
}, [])
   
const filterFrends=frends.filter(frend=>{
    return frend.name.toLowerCase().includes(searchValue.toLowerCase())
})
return(
    <>
<form  className={styles.block__form}>
        <input  type='text' placeholder='Найти друга' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
     

    </form>
    <div className={styles.table__div}>
    {loading&&<h2>Загрузка</h2>}
        {isError&&<h3>Ошибка на сервере</h3>}
            {filterFrends.map((item, id)=>{
                const {name, img, alt}=item;
                return(
                    <div key={id} className={styles.blockFrends__div}>
                        <h4>{name}</h4>
                        <img src={`${img}`} alt={`${alt}`}/>
                    </div>
                    
                )

            })}
            </div>
 
   </>

)
}
export default SearchForm;