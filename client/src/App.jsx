// import { Navbar , Welcome, Footer, Servieces, Transactions} from './components';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Loader from './components/Footer';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />

  </div>

);

export default App