import './App.css';
import React ,{useState} from 'react'

import List from './List'
import AddToList from './AddToList';

export interface Istate{
  people:{
    name:string,
    age:number,
    note?:string,
    url:string
  }[]
}
function App() {
  const [people, setPeople] = useState<Istate["people"]>([{
    name:"charlie winston",
    age:12,
    url:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f5be112e7f395dc08ef8e58%2F0x0.jpg",
    note:"This is the my friend"
  }])
  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
