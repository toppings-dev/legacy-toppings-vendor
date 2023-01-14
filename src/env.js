const local = 'http://localhost:4000/';
const prod = 'https://api.toppingsapp.com/';

export const API_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? local : prod;