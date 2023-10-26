import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Navbar from './layout/Navbar/Navbar';

function App() {
  return (
    <div className='app-navbar'>
    <Navbar/>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
