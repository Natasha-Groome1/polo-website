import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './pages/about/about';
import BookNow from './pages/booknow/booknow';
import Chukkas from './pages/chukkas/chukkas';
import Contact from './pages/contact/contact';
import ExperienceDays from './pages/experiencedays/experiencedays';
import Home from './pages/home/home';
import Merchandise from './pages/merchandise/merchandise';
import PoloLessons from './pages/pololessons/pololessons';
import PoloLivery from './pages/pololivery/pololivery';
import Sponsorship from './pages/sponsorship/sponsorship';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/pololessons' component={PoloLessons} />
        <Route path='/experiencedays' component={ExperienceDays} />
        <Route path='/pololivery' component={PoloLivery} />
        <Route path='/sponsorship' component={Sponsorship} />
        <Route path='/merchandise' component={Merchandise} />
        <Route path='/chukkas' component={Chukkas} />
        <Route path='/contact' component={Contact} />
        <Route path='/booknow' component={BookNow} />
      </Switch>
    </Router>
  )
}

export default App;


// How do I get this on GITHUB to work on my personal computer?

