import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterdUsername, setEnterdUsername] = useState('');
  const [enterdAge, setEnterdAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterdUsername, enterdAge);
    setEnterdUsername('');
    setEnterdAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="usename">Usuário</label>
        <input id="username" type="text" value={enterdUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Idade (Years)</label>
        <input id="age" type="text" value={enterdAge} onChange={ageChangeHandler} />
        <Button type="submit">Adicionar usuário</Button>
      </form>
    </Card>
  );
};

export default AddUser;
