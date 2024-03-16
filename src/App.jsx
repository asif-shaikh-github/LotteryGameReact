import './App.css'
import Lottery from './Lottery'

function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  
  return (
    <div>
      <Lottery n={3} winCondition={ winCondition }/>
    </div>
  )
}

export default App
