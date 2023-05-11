import React from 'react';
import "./styles.scss";
import {Routes, Route} from 'react-router-dom';
import MainPage  from './components/MainPage/MainPage';
import {RouteMainAvtorization} from './components/RouteMainAvtorization/RouteMainAvtorization';
import PageRegistration from './components/PageRegistration/PageRegistration';
import MyPage from './components/MyPage/MyPage';
import MyFrendsPage from './components/MyFrendsPage/MyFrendsPage';
import FrendsList from './components/FrendsList/FrendsList';
import MyBestFrend from './components/MyBestFrend/MyBestFrend';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='Вход и регистрация' element={<RouteMainAvtorization/>}/>
        <Route path='Регистрация' element={<PageRegistration/>}/>
        <Route path='Страница пользователя' element={<MyPage/>}/>
        <Route path='Страница друзей' element={<MyFrendsPage/>}/>
        <Route path='Список моих друзей' element={<FrendsList/>}/>
        <Route path='Страница друга' element={<MyBestFrend/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
