import Form from "./components/Form";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import './App.css';
import { useState } from "react";
import ListaCfops from "./components/ListaCfops";

function App() {

  const [visible, setVisible] = useState(true);


  const changeVisibleForm = () => {
    setVisible(true);
  }
  const changeVisibleList = () => {
    setVisible(false);
  }

  

  return (
    <div className="App">
      <div className="headers">
        <Logo/>
        <Menu changeList={changeVisibleList} onChangeForm={changeVisibleForm} />
      </div>
      <div className="body">
        {visible ? <Form/> : <ListaCfops/>}
      </div>
    </div>
  );
}

export default App;
