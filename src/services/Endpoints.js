import { BASE_URL } from './Environment';

const baseUrl = BASE_URL.development;

class EndPoints {
  static transaction = `${baseUrl}/transactions`;
}

export default EndPoints;
