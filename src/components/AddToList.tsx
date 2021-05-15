import React ,{useState}from 'react'
import {Istate as props} from './App'

interface Iprops{
    people:props["people"],
    setPeople: React.Dispatch<React.SetStateAction<props["people"]>>
}

const AddToList: React.FC<Iprops>=({people,setPeople})=>{
    const [person,setPerson]=useState({
    name: "",
    age: "",
    note: "",
    img: ""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
        ):void=>{
        setPerson({
            ...person,[e.target.name]:e.target.value
        })
    }
    const handleClick=():void=>{
        if(!person.name ||!person.age || !person.img) return
        setPeople([
            ...people,{
                name:person.name,
                age:parseInt(person.age),
                url:person.img,
                note:person.note
            }
        ])
        setPerson({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }
    return (
        <div className="AddToList">
            <input type="text" className="AddToList-input" placeholder="Name" value={person.name} onChange={handleChange} name="name"/>
            <input type="number" className="AddToList-input" placeholder="Age" value={person.age} onChange={handleChange} name="age"/>
            <input type="text" className="AddToList-input" placeholder="Image" value={person.img} onChange={handleChange} name="img"/>
            <textarea className="AddToList-input" placeholder="Note" value={person.note} onChange={handleChange} name="note"/>
            <button className="AddToList-btn" onClick={handleClick}>Add To List</button>
        </div>
    )
}
export default AddToList