import { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [users, setUsers] = useState([])
  const reqres = async() => {
    const res = await fetch("https://reqres.in/api/users/")
    const json = await res.json()
    setUsers(json.data)
  }
  console.log(users)

  useEffect(() => {
    reqres()
  },[])


  return (
    <>
      <h2 className="title">ReqRes Social Network</h2>
      {users.length && users.map((user) => 
        (<div className="cardsUsers" key={user.id}>
          <Cards user={user}/>
        </div>)
      )}
    </>
  );
}

export default App;
