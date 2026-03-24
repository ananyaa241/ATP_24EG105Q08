import './App.css';
import UsersList from './components/UsersList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App(){
  return(
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="m-16">
        <UsersList />
      </div>

      <Footer />
    </div>
  )
}

export default App;