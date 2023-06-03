import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import ComboBox from './components/comboBox';
import ChekInDatePicker from './components/checkInDate';
import AdultIncrementor from './components/adultsIncrementor'
import ChekckOutDatePicker from './components/checkOutDate';
import ChildIncrementor from './components/childIncrementor';
import InfantIncrementor from './components/infant';
import BoardBasis from './components/boardBasis';
import StarRating from './components/starRating';
import TextBox from './components/textBox';
import MultiSelectComboBox from './components/comboBoxMultiSelect';
import axios from 'axios';
import MediaControlCard from './components/hotelDummyCard';
import { Backdrop, Box, CircularProgress } from '@mui/material';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedAPIs, setSelectedAPIs] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleMultiSelectChange = (values) => {
    setSelectedValues(values);
  };

  const handleResultClick = async () => {
    // Perform the action when the result button is clicked
    setLoader(true);
    setHotels([]);
    const request1 = axios.get('https://647b9b0dd2e5b6101db178a6.mockapi.io/api/v1/hotels');

  try {
    const responses = await Promise.all([request1]);
    // Handle the responses
    setLoader(false);
    responses.forEach((response, index) => {
      console.log(`Response ${index + 1}:`, response.data);
      setHotels(response.data);
    });
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log('Error:', error);
  }
  };

  return (
    <div className="App">
      {loader && (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={true}
          // onClick={!isCustomerLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className='searchBoxContainer'>
        <div className='searchBox'>
          <div className='row'>
          <div className='filterOption'>
  <div className='filterOption1'>
    <label>
      <input type='checkbox' />
      <div className='tickOption'>Show Airport Hotel</div>
    </label>
  </div>
  <div className='filterOption2'>
    <label>
      <input type='checkbox' />
      <div className='tickOption'>Show Dinesyland Paris Hotels</div>
    </label>
  </div>
  <div className='filterOption3'>
    <label>
      <input type='checkbox' />
      <div className='tickOption'>Hide Non-Refundable Rates</div>
    </label>
  </div>
</div>


            <div className='col-md-6'>
              <div className='destination'>
                <ComboBox />
              </div>
              <div className='datePickerContainer'>
                <div className='checkInDate'>
                  <ChekInDatePicker />
                </div>
                <div className='checkOutDate'>
                  <ChekckOutDatePicker />
                </div>
              </div>
              <div className='boardBasis'>
                <BoardBasis />
              </div>
              
              <div className='incremtor'>
                <AdultIncrementor />
              </div>
              <div className='incremtor'>
                <ChildIncrementor />
              </div>
              <div className='incremtor'>
                <InfantIncrementor />
              </div>
            </div>
            <div className='col-md-6'>
              
              <div className='starRating'>
                <p>Star Rating</p>
                <StarRating totalStars={5} />
              </div>
              <div className='hotelName'>
                <p>Hotel Name</p>
                <TextBox />
              </div>
              <div className='resortName'>
                <p>Resort Name</p>
                <TextBox />
              </div>
              <p>BedBank Name</p>
              <div className='multiSelect'>
                <MultiSelectComboBox
                  options={['Orbis travels', 'Symrooms']}
                  onChange={handleMultiSelectChange}
                />
              </div>
              <div className='minMaxPrice'>
                <p>Min price and max Price</p>
                <TextBox />
              </div>
            </div>
            <div className='formBtn'>
            <div className='resultButton' onClick={handleResultClick}>
                Result
              </div>
              </div>
          </div>
        </div>
      </div>
      {(hotels || []).map(item => {
        return (
          <>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 50px auto', maxWidth: '850px' }}>
            <MediaControlCard item={item} />
          </Box>
          </>
        )
      })
      }
    </div>
  );
}

export default App;
