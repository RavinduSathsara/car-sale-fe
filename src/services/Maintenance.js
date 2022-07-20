import axios from 'axios';
import EndPoints from './Endpoints';

// get all Maintenance data
export const getAllMaintenance = async () => {
  const results = await axios.get(EndPoints.maintenance);
  return results;
};
