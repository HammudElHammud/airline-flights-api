import express from 'express';

const Flight = require('../db/flights');
const axios = require('axios');

import {createAxios} from "../utils/AxiosHelper";

const gatewayApi = createAxios()


export const getMyFlights = async (req: express.Request, res: express.Response) => {
    const ip = req.ip;

    try {
        const flights = await Flight.find({ip: ip});
        res.json(flights);
    } catch (error) {
        console.error('Error fetching flights:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}


export const createFlight = async (req: express.Request, res: express.Response) => {
    const flightData = req.body;
    const ip = req.ip;

    flightData.ip = ip;

    try {
        const newFlight = new Flight(flightData);
        await newFlight.save();
        res.status(201).json(newFlight);
    } catch (error) {
        console.error('Error saving flight:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getAllFlights = async (req: express.Request, res: express.Response) => {
    try {
        const {scheduleDate, flightDirection, airline, route, fromDateTime, toDateTime} = req.query;

        let params: any = {};

        if (fromDateTime) {
            if (params) {
                params.fromDateTime = fromDateTime;
            } else {
                params = {fromDateTime};
            }
        }

        if (toDateTime) {
            if (params) {
                params.toDateTime = toDateTime;
            } else {
                params = {toDateTime};
            }
        }

        if (airline) {
            if (params) {
                params.airline = airline;
            } else {
                params = {airline};
            }
        }

        if (route) {
            if (params) {
                params.route = route;
            } else {
                params = {route};
            }
        }

        if (flightDirection) {
            if (params) {
                params.flightDirection = flightDirection;
            } else {
                params = {flightDirection};
            }
        }
        let query = '';
        if (params.airline && params.airline.length > 0) {
            query += `airline=${params.airline}&`;
        }

        if (params.scheduleDate) {
            query += `scheduleDate=${params.scheduleDate}&`;
        }
        if (params.fromDateTime) {
            query += `fromDateTime=${params.fromDateTime}&`;
        }

        if (params.route) {
            query += `route=${params.route}&`;
        }
        if (params.flightDirection) {
            query += `flightDirection=${params.flightDirection}&`;
        }

        if (params.toDateTime) {
            query += `toDateTime=${params.toDateTime}&`;
        }

        if (query.endsWith('&')) {
            query = query.slice(0, -1);
        }
        console.log({query: `/flights?${query}`})

        const response = await gatewayApi.get(`/flights?${query}&includedelays=true`);

        const flights = response.data;
        return res.status(200).json(flights);

    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            return res.status(error.response.status).json({
                message: 'Error fetching flights',
                error: error.response.data,
            });
        } else if (error.request) {
            console.error('No response received:', error.request);
            return res.status(500).json({message: 'No response from API'});
        } else {
            console.error('Request Error:', error.message);
            return res.status(500).json({message: 'Request setup error'});
        }
    }
};

export const getAllAirlines = async (req: express.Request, res: express.Response) => {
    try {
        const response = await gatewayApi.get(`/airlines`);
        const airlines = response.data;


        return res.status(200).json(airlines);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};


export const getAllDestinations = async (req: express.Request, res: express.Response) => {
    try {
        const response = await gatewayApi.get('/destinations');
        const destinations = response.data;


        return res.status(200).json(destinations);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
