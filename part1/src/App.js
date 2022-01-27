import './App.css';
import Mensaje from './Mensaje'



const Description = () => {
  return <p>Mensaje con una descrpción</p>
}


const App = () => {

  return (
    <div className="App">
      <Mensaje color="green" texto='Hola desder el props'/>
      <Mensaje color="red" texto='Este es un segundo mensje con props'/>
      <Description/>
    </div>
  );
}

export default App;
