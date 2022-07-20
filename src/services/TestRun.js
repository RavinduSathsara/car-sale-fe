import axios from 'axios';
import EndPoints from './Endpoints';



// get all testrun
export const getAllTestRun = async () => {
    const results = await axios.get(EndPoints.testRun);
    return results;
  };