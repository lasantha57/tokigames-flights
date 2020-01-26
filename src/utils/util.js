
import uuidv4 from 'uuid/v4';
import moment from 'moment';

export const convertToDateString = (date) => {
    return moment(date).format('YYYY-MM-DD');
}

export const convertToTimeString = (date) => {
    return moment(date).format('HH:mm a');
}

export const getUniqueId = () => {
    return uuidv4();
}
