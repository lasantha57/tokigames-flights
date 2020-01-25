
import axios from 'axios';

const getAll = async () => {
    const [cheapFlights, businessFlights] = await axios.all([getCheapFlights(), getBusinessFlights()]);
    //console.log([...cheapFlights.data.data, ...businessFlights.data.data])
    //const flightData = mapFlightData();
    return [...cheapFlights.data.data, ...businessFlights.data.data];
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
