// import axios from "axios"
// import { getproduct } from "../userSlice"

// export const getproductApi = () => {
//     return async (dispatch) => {
//         await axios.get('http://localhost:3001/product').then(res => {
//             // console.log('res',res.data
//             dispatch(getproduct(res.data))
//         })
//     }
// }

import axios from "axios"
import { getproduct } from "../userSlice"

export const getproductApi = () => {
    return async (dispatch) => {
        await axios.get('/api/hello').then(res => {
            console.log('res',res)
            dispatch(getproduct(res.data))
        })
    }
}

// ------------------------------1.simple-ioredis----
// import axios from "axios";
// import { getproduct } from "../userSlice";
// import { Redis } from "ioredis";

// // Create a Redis client
// const redis = new Redis();

// export const getproductApi = () => {
//   return async (dispatch) => {
//     try {
//       // First, check if the data is in Redis
//       const redisData = await redis.get("productData");

//       if (redisData) {
//         // If data is found in Redis, use it
//         const parsedData = JSON.parse(redisData);
//         dispatch(getproduct(parsedData));
//       } else {
//         // If data is not in Redis, fetch it from your API
//         const response = await axios.get("http://localhost:3001/product");

//         // Save the fetched data in Redis
//         await redis.set("productData", JSON.stringify(response.data));

//         // Dispatch the data to the Redux store
//         dispatch(getproduct(response.data));
//       }
//     } catch (error) {
//       console.error("Error fetching or caching data:", error);
//     }
//   };
// };


// import axios from "axios";
// import { getproduct } from "../userSlice";
// import Redis from "redis";

// const redis = new Redis();

// export const getproductApi = () => {
//   return async (dispatch) => {
//     try {
//       // First, try to get data from Redis
//       redis.get("productData", (err, cachedData) => {
//         if (err) {
//           console.error("Error fetching data from Redis:", err);
//           return;
//         }

//         if (cachedData) {
//           // If data is found in Redis, parse and dispatch it
//           const parsedData = JSON.parse(cachedData);
//           dispatch(getproduct(parsedData));
//         } else {
//           // If data is not found in Redis, fetch it from the API
//           axios.get("http://localhost:3001/product").then((response) => {
//             const productData = response.data;

//             // Store the data in Redis for future use
//             redis.set("productData", JSON.stringify(productData));

//             // Dispatch the data to the Redux store
//             dispatch(getproduct(productData));
//           });
//         }
//       });
//     } catch (error) {
//       console.error("Error in getproductApi:", error);
//     }
//   };
// };
