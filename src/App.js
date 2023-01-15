import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Fitness from './component/Fitness/Fitness';
import Question from './component/Question/Question';

function App() {
  return (
    <div>
      <Header></Header>
      <Fitness></Fitness>
      <Question></Question>
    </div>
  );
}

export default App;
