import React from 'react'
import { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

  return (
    <div>
        <input style={{padding : 10 , margin: 10}} type="text" placeholder='title' onChange={function(e) {
            const value = e.target.value
            setTitle(e.target.value)
        }}/> <br />
        <input style={{padding : 10 , margin: 10}} type="text" placeholder='decription' onChange={function(e) {
            const desc = e.target.value
            setDescription(e.target.value)
        }} /> <br />
        <button style={{padding : 10 , margin: 10}} onClick={(e) => {
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type": "application/json" 
                }
            })
            .then( async function(res) {
                const json = await res.json()
                alert("Todo Added")
            })

            e.target.value =  ""

        }}
        >Add todo</button>
    </div>
  )
}

export default CreateTodo