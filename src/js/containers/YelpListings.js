import React, { Component } from "react";
import { connect } from "react-redux";

class YelpSearchListings extends Component {
  render() {
    if (!this.props.search[0]) { return null }
    return this.props.search[0].businesses.map((results, index) => {
      console.log('places', results)
      return (<div className='yelp-card' key={index}>
        <div className='card'>
          <div className='row'>
            <div className='col-sm-4'>
              <img className='featured-image' src={results.image_url} />
            </div>

            <div className='col-sm-8'>
              <div className='card-block'>
                <h4><strong>{results.name}</strong></h4>
                <p> {results.display_phone} </p>
                <p> {results.location.display_address} </p>
                <p> {results.rating} </p>
                <p> {results.price}   <button className='btn btn-default-left pull-right' type='submit'>
                  <span className='glyphicon glyphicon-plus'></span>Add To Wishlist
                </button></p>
              
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );

    })

  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(YelpSearchListings);
