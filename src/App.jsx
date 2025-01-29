import { useEffect, useState } from "react"

const App = () => {

  const [users, setUsers] =useState([])

  const fetchUsers = async () => {
    fetch("http://95.130.227.158:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <h1>App</h1>
      {
        users && users.map(user => {
          return (
            <>
            <div style={{ borderBottom: "1px solid black" }}>
              <h3> {user.name} </h3>
              <p> {user.email} </p>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default App
