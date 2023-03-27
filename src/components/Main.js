import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import ConfirmedBooking from "./ConfirmedBooking"

const Main = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = () => {
        return fetchAPI(new Date());
    }

    const updateTimes = (state, action) => {
        return fetchAPI(new Date(action.date));
    }

    const submitForm = (data) => {
        return submitAPI(data);
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
                <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
            </Routes>
         </main>
    );
}

export default Main;