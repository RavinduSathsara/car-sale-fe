import axios from 'axios';
import EndPoints from './Endpoints';

// get all testrun
export const getAllTestRun = async () => {
  const results = await axios.get(EndPoints.testRun);
  return results;
};
// remove test run
export const removeTestRun = async (id) => {
  const result = await axios.delete(`${EndPoints.testRun}/${id}`);
};
// get testrun
export const getTestRun = async (id) => {
  const results = await axios.get(`${EndPoints.testRun}/${id}`);
  return results;
};
// Update Test run
export const updateTestRun = async (id, data) => {
  const results = await axios.put(`${EndPoints.testRun}/${id}`, data);
  return results;
};
