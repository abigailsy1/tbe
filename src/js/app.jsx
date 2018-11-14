import React from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import YelpSearchContainer from './containers/YelpSearchContainer';

class App extends React.Component {
  render() {
    return (

      <Router>
        <div className='container'>
          <Route exact path='/' component={YelpSearchContainer} />
        </div>
      </Router>
    )
  }
}

export default App;