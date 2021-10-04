import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button variant="btn btn-primary">Primary</Button>
      <Button variant="btn btn-danger">Danger</Button>
    </div>
  );
}

export default App;