import Input from './components/Input';
import Operators from './components/Operators';
import Numbers from './components/Numbers';
import Equal from './components/Equal';

function App() {
  return (
    <div className='calculator'>
      <Input />
      <Operators />
      <Numbers />
      <Equal />
    </div>
  );
}

export default App;
