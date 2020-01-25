
import axios from 'axios';

const convertToDateString = (date) => {
    let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return dateString;
}

const convertToTimeString = (date) => {
    let timeString = `${date.getHours()}:${date.getMinutes()}`;
    return timeString;
}

const mapBusinessFlightData = (data) => {

    const flightsData = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const departure = new Date(element.departureTime);
        const arrival = new Date(element.arrivalTime);

        flightsData.push({
            departure: element.departure,
            arrival: element.arrival,
            departureDate: convertToDateString(departure),
            departureTime: convertToTimeString(departure),
            arrivalDate: convertToDateString(arrival),
            arrivalTime: convertToTimeString(arrival),
            isBusiness: true
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
            departure: routes[0],
            arrival: routes[1],
            departureDate: convertToDateString(departure),
            departureTime: convertToTimeString(departure),
            arrivalDate: convertToDateString(arrival),
            arrivalTime: convertToTimeString(arrival),
            isBusiness: false
        });
    }

    return flightsData;
}

const getAll = async () => {
    const [cheapFlights, businessFlights] = await axios.all([getCheapFlights(), getBusinessFlights()]);
    const cheapFlightsData = mapCheapFlightData(cheapFlights.data.data);
    const businessFlightsData = mapBusinessFlightData(businessFlights.data.data);
    const flights = [...cheapFlightsData, ...businessFlightsData]
    flights.forEach((o, i) => o.id = i + 1);
    return flights;
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
