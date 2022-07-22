import axios from 'axios';
import EndPoints from './Endpoints';

// get all Inquiry data
export const getAllVehicleInquiry = async () => {
  const results = await axios.get(EndPoints.vehicleInquiry);
  return results;
};
export const removeVehicleInquiry = async (id) => {
  const result = await axios.delete(`${EndPoints.vehicleInquiry}/${id}`);
};
