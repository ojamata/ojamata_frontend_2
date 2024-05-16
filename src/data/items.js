import axios from "axios";

const apiBaseUrl = 'https://ojamata.onrender.com/api/item/get-all';

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 5000,
  crossdomain: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')  
  }
});

const getAll = async () => {
  try {
    const response = await axiosInstance.post(); // Add the endpoint URL here if necessary
    console.log('Items retrieved:', response.data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error getting items:', error);
    throw error; // Rethrow the error to handle it outside of this function if needed
  }
};

// Call getAll function to fetch items and assign the result to the items variable
export const items = async () => {
  try {
    const items = await getAll();
    console.log('Items:', items);
    return items;
  } catch (error) {
    // Handle error
    console.error('Failed to fetch items:', error);
    return []; // Return an empty array in case of error
  }
};


//[
//     {
//         id: 1,
//         itemName: 'Pepper',
//         category: 'Vegetables',
//         price: 500,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 2,
//         itemName: 'Tomatoes',
//         category: 'Vegetables',
//         price: 700,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 3,
//         itemName: 'Mango',
//         category: 'Fruits',
//         price: 200,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 4,
//         itemName: 'Fresh Fish',
//         category: 'Fresh Fish & Meats',
//         price: 5000,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 5,
//         itemName: 'Frozen Chicken',
//         category: 'Frozen Food',
//         price: 4500,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 6,
//         itemName: 'Rice',
//         category: 'Grains',
//         price: 5100,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 7,
//         itemName: 'Beans',
//         category: 'Grains',
//         price: 5200,
//         quantity: 1,
//         picture: '',
//     },
//     {
//         id: 8,
//         itemName: 'Avocado',
//         category: 'Fruits',
//         price: 500,
//         quantity: 1,
//         picture: '',
//     }
// ]