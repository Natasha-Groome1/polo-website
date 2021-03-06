import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import About from './pages/about/about';
import BookNow from './pages/booknow/booknow';
import Chukkas from './pages/chukkas/chukkas';
import Contact from './pages/contact/contact';
import ExperienceDays from './pages/experiencedays/experiencedays';
import Home from './pages/home/home';
import Merchandise from './pages/merchandise/merchandise';
import Months from './pages/months/Months';
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
        <Route path='/month/:nameofmonth' component={Months} />
      </Switch>
    </Router>
  )
}

export default App;

// 2 things with Harry
// How do I get the background of the main website to change from white? This is style confusing me
// The route to get January etc. working just isn't happening for me 

// Also thinking if you could give me some goals to look doing to the page?
