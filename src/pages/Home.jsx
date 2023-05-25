import React, { useContext } from 'react';
import context from '../context/Context';
import style from './Home.module.css';
import Header from '../components/Header';

function Home() {
  const {
    user, setApiKey,
  } = useContext(context);
  return (
    <div className={style.container}>
      { setApiKey('7dc91466cf14efcce68f7d256bcea2a9')}
      <Header user={user} />
    </div>
  );
}

export default Home;
