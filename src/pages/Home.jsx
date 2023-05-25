import React, { useContext } from 'react';
import context from '../context/Context';
import style from './Home.module.css';
import Header from '../components/Header';

function Home() {
  const {
    user,
  } = useContext(context);
  return (
    <div className={style.container}>
      <Header user={user} />
    </div>
  );
}

export default Home;
