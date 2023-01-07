import "./App.css";
import Users from "./Components/Users.jsx";
import Succes from "./Components/Succes.jsx";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [succes, setSucces] = useState(false);

  //data
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.warn(err);
        alert("Fehlermeldung");
      });
  }, []);

  //for Search input
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  //function Identifikation
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  // function Send
  const onclickSendInvites =()=>{
    setSucces(true)
  }

  return (
    <div className="App">
      {succes ? (
        <Succes count={invites.length}/>
      ) : (
        <Users
          items={items}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onclickSendInvites={onclickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
