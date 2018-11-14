import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import YelpSearchListings from "./YelpListings"

class YelpSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.dispatch(fetchData(this.state.input));
    this.setState({ input: "" });
  }

  render() {
    return (

      <div>

        <div className='container'>
          <nav className='navbar navbar-inverse'>

            <div className='container-fluid'>

              <div className='navbar-header'>
                <a className="navbar-brand" href="#">T.B.E.</a>
              </div>

              <form className='navbar-form'>

                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Find' value={this.state.input} onChange={this.onInputChange} />
                  <input type='text' className='form-control' placeholder='Location' />
                  <button className='btn btn-default' onClick={this.onFormSubmit}>Search</button>
                </div>

                <div className='nav navbar-nav navbar-right'>

                  <button className='btn btn-default' type='submit'>
                    <span className='glyphicon glyphicon-user'></span>Sign up
                    
                </button>
                  <button className='btn btn-default' type='submit'>
                    <span className='glyphicon glyphicon-log-in'></span>Log In
                </button>

                </div>
              </form>

            </div>
          </nav>
          <br />

        </div>
        <YelpSearchListings />
      </div>
    )
  }
}

export default connect(null)(YelpSearchContainer);
