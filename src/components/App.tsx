import './App.css';
import React ,{useState} from 'react'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import List from './List'
import AddToList from './AddToList';
import LoadData from './LoadData';
import ViewData from './ViewData';
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ActionCreator from '../state/action-creators/index'
import {State} from '../state/reducers/index'
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
  const dispatch=useDispatch()
  const {depositMoney,withdrawMoney,bankrupt}=bindActionCreators(ActionCreator,dispatch)
  const amount=useSelector((state:State)=>state.bank)
  return (
    <BrowserRouter>
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>dispatch(ActionCreator.depositMoneyDirect(1000))}>Deposit</button>
      <button onClick={()=>withdrawMoney(300)}>Withdraw</button>
      <button onClick={()=>bankrupt()}>Bankrupt</button>
      <h1>People invited to the party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
      <Switch>
        <Route path="/" exact component={LoadData}/>
        <Route path="/articles/:id" component={ViewData} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
