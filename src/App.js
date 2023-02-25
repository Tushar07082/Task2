import React, { useEffect, useState } from "react"
import Card from "./Components/Card"
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="users">
      {users.map((user) => (
            <Card className="card" key={user.id} user = {user}/>
      ))}
    </div>
  )
}

export default App;