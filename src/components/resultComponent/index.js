import React from 'react';
import './style.css';
import StarRating from '../starRating';

const ResultPage = () => {
  return (
    <div className='resultContainer'>
      <div className="container">
        <h1 className="mt-5">Search Results</h1>
        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Destination</h5>
                <p className="card-text">Option 1</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Star Rating</h5>
                <p className="card-text"><StarRating totalStars={5} /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Date</h5>
                <p className="card-text">01-05-2022</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hotel Name</h5>
                <p className="card-text">Fake Hotel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Check-Out Date</h5>
                <p className="card-text">03-05-2022</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resort Name</h5>
                <p className="card-text">Fake Resort</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Board Basis</h5>
                <p className="card-text">Room Only</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">BedBank Name</h5>
                <p className="card-text">Orbit Travels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Adults</h5>
                <p className="card-text">4</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">min price and max price</h5>
                <p className="card-text">80</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Child</h5>
                <p className="card-text">5</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Infant</h5>
                <p className="card-text">2</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Selected Check box option</h5>
                <p className="card-text">1. Show Airport</p>
                <p className="card-text">2. Show Disneyland Paris Hotels</p>
                <p className="card-text">3. Hide Non-Refundable Rates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
            <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary custom-button">Submit</button>
            </div>
            </div>

          </div>
        </div>
  );
};

export default ResultPage;
