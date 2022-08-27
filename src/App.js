import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Script from './components/Script';

function App() {
  return (
    <div className='app-wrapper'>
      <Header>Киноцентр</Header>
      <Script />
    </div>
  );
}

export default App;
