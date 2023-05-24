import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import context from '../context/Context';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import styles from './Login.module.css';
import logo from '../assets/logo-no-background.svg';

function Login() {
  const {
    onLogin, apiKey, setApiKey, error, loading,
  } = useContext(context);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(apiKey);
  };

  const disabled = !apiKey || apiKey.length < 24;
  return (
    <main className={styles.container}>
      <img src={logo} alt="Meu Time logo" />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite sua chave API do Football-Api"
          type="text"
          name="apiKey"
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
        <Button disabled={disabled} type="submit">
          Entrar
        </Button>
      </Form>
      { loading && <ReactLoading type="spin" color="#2F816B" height={70} width={70} /> }
      { error && (
      <p>
        {error}
      </p>
      )}
    </main>
  );
}

export default Login;
