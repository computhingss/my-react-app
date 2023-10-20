import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return(
    <div>
<p>Başlangıç</p>
<div className='Cards'>
<Card title="Dağ1" p="Açıklama 1"/>
<Card title="Dağ2" p="Açıklama 2"/>
<Card title="Dağ3" p="Açıklama 3"/>
<Card title="Dağ4" p="Açıklama 4"/>

</div>
    </div>
  );
}

export default App;
