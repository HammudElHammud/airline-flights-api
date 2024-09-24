import express from 'express';
import { getAllFlights , getAllAirlines, getAllDestinations, createFlight, getMyFlights } from '../controllers/flights';


export default (router: express.Router) => {
    router.get('/flights', getAllFlights);
    router.get('/airlines', getAllAirlines);
    router.get('/destinations', getAllDestinations);
    router.post('/flight', createFlight);
    router.get('/my-flights', getMyFlights);
  };