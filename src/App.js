import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import ComboBox from "./components/comboBox";
import ChekInDatePicker from "./components/checkInDate";
import AdultIncrementor from "./components/adultsIncrementor";
import ChekckOutDatePicker from "./components/checkOutDate";
import ChildIncrementor from "./components/childIncrementor";
import InfantIncrementor from "./components/infant";
import BoardBasis from "./components/boardBasis";
import StarRating from "./components/starRating";
import TextBox from "./components/textBox";
import MultiSelectComboBox from "./components/comboBoxMultiSelect";
import axios from "axios";
import MediaControlCard from "./components/hotelDummyCard";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import jsonData from "./data.json";

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedAPIs, setSelectedAPIs] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [checkoutDate, setCheckOutDate] = useState(null);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [text, setText] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelectChange = (values) => {
    setSelectedValues(values);
  };

  console.log(
    "selectedDate",
    selectedDate,
    selectedOptions.some((item) => item === "Symrooms")
  );

  function extractRooms(jsonData) {
    const roomsArray = [];

    // Check if the input data has a "Hotels" array
    if (jsonData.Hotels && Array.isArray(jsonData.Hotels)) {
      jsonData.Hotels.forEach((hotel) => {
        if (hotel.MealPlans && Array.isArray(hotel.MealPlans)) {
          hotel.MealPlans.forEach((mealPlan) => {
            if (mealPlan.Options && Array.isArray(mealPlan.Options)) {
              mealPlan.Options.forEach((option) => {
                if (option.Rooms && Array.isArray(option.Rooms)) {
                  roomsArray.push(...option.Rooms);
                }
              });
            }
          });
        }
      });
    }

    return roomsArray;
  }

  // Example usage:

  const rooms = extractRooms(jsonData);
  console.log("rooms", rooms);

  const handleResultClick = async () => {
    // Perform the action when the result button is clicked
    setLoader(true);
    setHotels([]);
    let payload;
    if (selectedOptions.some((item) => item === "Symrooms")) {
      payload = {
        bedbank: "https://api.smyrooms.com/search",
        data: {
          HubProvider: "TTHOT",
          Language: "es",
          TimeoutMilliseconds: 300000,
          Configuration: {
            User: "31538",
            Password: "cb4a4cf6-3edd-45b7-af37-005890e3b04b",
            ShowPackageRates: true,
            AccessToken:
              "Fp+jMTdgiQNfqZcvFkPGAmlM3O8xxD+CAK85aS/wul7yuqLPifgL/ZLkKsokWegVK4iJ2aSXFyZp3hBHbenH0g==",
            BookingEmail: "daniel.diez@smyrooms.com",
            Test: true,
          },
          Hotels: [text],
          StartDate: new Date(selectedDate)?.toISOString(),
          EndDate: new Date(checkoutDate)?.toISOString(),
          Currency: "EUR",
          RoomCandidates: [
            {
              Id: 1,
              Paxes: Array(adultCount)
                ?.fill("_")
                ?.map((item, Id) => ({
                  Id,
                  Age: 30,
                })),
            },
            {
              Id: 2,
              Paxes: Array(childCount)
                ?.fill("_")
                ?.map((item, Id) => ({
                  Id,
                  Age: 10,
                })),
            },
            {
              Id: 3,
              Paxes: Array(infantCount)
                ?.fill("_")
                ?.map((item, Id) => ({
                  Id,
                  Age: 1,
                })),
            },
          ],
          Market: "ES",
          CancellationPolicies: false,
        },
      };
    }

    try {
      const response = await axios.post(
        "http://154.41.253.139:2020/api/search",
        payload
      );
      console.log("response", response);
      // const response = await Promise.all([request]);
      // Handle the responses
      setLoader(false);
      // responses.forEach((response, index) => {
      // console.log(`Response ${index + 1}:`, response.data);
      const rooms = extractRooms(response.data);
      console.log("rooms", rooms);
      setHotels(rooms);
      // });
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("Error:", error);
    }
  };

  return (
    <div className="App">
      {loader && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          // onClick={!isCustomerLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="searchBoxContainer">
        <div className="searchBox">
          <div className="row">
            <div className="filterOption">
              <div className="filterOption1">
                <label>
                  <input type="checkbox" />
                  <div className="tickOption">Show Airport Hotel</div>
                </label>
              </div>
              <div className="filterOption2">
                <label>
                  <input type="checkbox" />
                  <div className="tickOption">Show Dinesyland Paris Hotels</div>
                </label>
              </div>
              <div className="filterOption3">
                <label>
                  <input type="checkbox" />
                  <div className="tickOption">Hide Non-Refundable Rates</div>
                </label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="destination">
                <ComboBox />
              </div>
              <div className="datePickerContainer">
                <div className="checkInDate">
                  <ChekInDatePicker
                    setSelectedDate={setSelectedDate}
                    selectedDate={selectedDate}
                  />
                </div>
                <div className="checkOutDate">
                  <ChekckOutDatePicker
                    setSelectedDate={setCheckOutDate}
                    selectedDate={checkoutDate}
                  />
                </div>
              </div>
              <div className="boardBasis">
                <BoardBasis />
              </div>

              <div className="incremtor">
                <AdultIncrementor
                  setAdultCount={setAdultCount}
                  adultCount={adultCount}
                />
              </div>
              <div className="incremtor">
                <ChildIncrementor
                  setAdultCount={setChildCount}
                  adultCount={childCount}
                />
              </div>
              <div className="incremtor">
                <InfantIncrementor
                  setAdultCount={setInfantCount}
                  adultCount={infantCount}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="starRating">
                <p>Star Rating</p>
                <StarRating totalStars={5} />
              </div>
              <div className="hotelName">
                <p>Hotel Name</p>
                <TextBox text={text} setText={setText} />
              </div>
              <div className="resortName">
                <p>Resort Name</p>
                <TextBox />
              </div>
              <p>BedBank Name</p>
              <div className="multiSelect">
                <MultiSelectComboBox
                  options={["Orbis travels", "Symrooms"]}
                  onChange={handleMultiSelectChange}
                  setSelectedOptions={setSelectedOptions}
                  selectedOptions={selectedOptions}
                />
              </div>
              <div className="minMaxPrice">
                <p>Min price and max Price</p>
                <TextBox />
              </div>
            </div>
            <div className="formBtn">
              <div className="resultButton" onClick={handleResultClick}>
                Result
              </div>
            </div>
          </div>
        </div>
      </div>
      {(hotels || [])?.map((item) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 50px auto",
                maxWidth: "850px",
              }}
            >
              <MediaControlCard item={item} />
            </Box>
          </>
        );
      })}
    </div>
  );
}

export default App;
