import React from 'react';
import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import Button from "./Button/Button";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Input label="Label"/>
        <Button>Button</Button>
    </div>
  );
}

export default App;
