import axios from 'axios';
import EndPoints from './Endpoints';

// get all lended data
export const getAllLend = async () => {
  const results = await axios.get(EndPoints.lend);
  return results;
};
// create lend
export const createLend = async (data) => {
  const results = await axios.post(EndPoints.lend, data);
  return results;
};
