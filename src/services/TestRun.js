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
