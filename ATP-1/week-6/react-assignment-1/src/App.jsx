import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className="m-16 min-h-screen">
        <UserForm />
      </div>
    </div>
  );
}

export default App;