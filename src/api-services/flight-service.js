
import axios from 'axios';
import { logError } from '../utils/logger';
import { getUniqueId, convertToDateString, convertToTimeString } from '../utils/util';

const mapBusinessFlightData = (data) => {

    const flightsData = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const departure = new Date(element.departureTime);
        const arrival = new Date(element.arrivalTime);

        flightsData.push({
            id: getUniqueId(),
            departure: element.departure,
            arrival: element.arrival,
            departureDate: convertToDateString(departure),
            departureTime: convertToTimeString(departure),
            arrivalDate: convertToDateString(arrival),
            arrivalTime: convertToTimeString(arrival),
            category: 'business'
        });
    }

    return flightsData;
}

const mapCheapFlightData = (data) => {
    const flightsData = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const arrival = new Date(element.arrival);
        const departure = new Date(element.departure);

        const routes = element.route ? element.route.split('-') : [];

        flightsData.push({
            id: getUniqueId(),
            departure: routes[0],
            arrival: routes[1],
            departureDate: convertToDateString(departure),
            departureTime: convertToTimeString(departure),
            arrivalDate: convertToDateString(arrival),
            arrivalTime: convertToTimeString(arrival),
            category: 'cheap'
        });
    }

    return flightsData;
}

const getAll = async () => {
    try {
        const [cheapFlights, businessFlights] = await axios.all([getCheapFlights(), getBusinessFlights()]);
        const cheapFlightsData = mapCheapFlightData(cheapFlights.data.data);
        const businessFlightsData = mapBusinessFlightData(businessFlights.data.data);
        const flights = [...cheapFlightsData, ...businessFlightsData]
        return flights;
    } catch (error) {
        logError(error);
    }
}

const getCheapFlights = () => {
    return axios.get('flights/cheap');
}

const getBusinessFlights = () => {
    return axios.get('flights/business');
}

export const flightService = {
    getAll
};
