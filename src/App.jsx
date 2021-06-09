import React, { useState } from 'react'

function App() {

  let [user, setuser] = useState({
    name: "",
    email: "",
    number: ""
  })

  let [person, setperson] = useState([])


  let {name, email, number} = user;



  const changeHandle = (e) =>{

    let {name , value } = e.target;

    /*
    
    setuser e amar purber user o lagbe. nahole notun add korlei ager gula chole jabe. tai {...user} user korechi
    

    abar name ke dynamic way te babhor korechi [name] use kore. ar na hole type kore use korte hoto onekta emon = if(name === "name")
    
    */
    setuser(user => {
      return {...user, [name] : value, id: new Date().getTime().toString()}
    })
  }


  const submitHandle =(e) => {
    e.preventDefault()
    setperson(person => {
      return [...person, user]
    })
    setuser({
    name: "",
    email: "",
    number: ""
    })
  }


  // Remove item
let removeItem = (id) => {
  let newItem = person.filter(person => person.id !== id)
  return setperson(newItem)

}

console.log(person)


  return (
    <div className="container">
      <h1 className="title">
        Mulitple Input Form
      </h1> <br /> 
      
      <form onSubmit={submitHandle}>
        {/* Name */}
          <div className="form-field">
            <label htmlFor="name">Name : </label> <br />
            <input type="text" name="name" id="name" required value={name} onChange={changeHandle}/>
          </div>
          {/* Email */}
          <div className="form-field">
            <label htmlFor="email">Email : </label> <br />
            <input type="email" value={email} name="email" id="email" required onChange={changeHandle}/>
          </div>

          {/* Age */}
          <div className="form-field">
            <label htmlFor="number">Number : </label> <br />
            <input type="number" name="number" id="number" value={number}
            onChange={changeHandle} required/>
          </div>


          {/* Button */}
          <button> Submit </button>
      </form>


      {
        person.map(person => {
          let {name, email, number, id} = person;
          return (
            <div key={id} className="person">
                <h2> {name} </h2>
                <p> {email}</p>
                <p> {number} </p>
                <p className="remove" onClick={() => removeItem(id)}> Remove </p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
