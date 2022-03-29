import Container from 'components/Container';
import Todos from 'components/Todos';

function App() {
  return (
    <div className="App">
      <Container number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
