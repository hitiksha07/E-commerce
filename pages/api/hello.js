import redis from "@/lib/redis";

export default async (req, res) => {
    // Check if data is cached
    // const cachedData = await redis.get('productData');

    // if (cachedData) {
    //     // Data found in cache, return it
    //     console.log("redis")
    //     return res.status(200).json(JSON.parse(cachedData));
    // } else {
    //     console.log("database")
        // If data is not cached, fetch and cache it from the external API
        try {
            const response = await fetch('http://localhost:3001/product');
            const newData = await response.json();

            // Cache the data for a specified duration (e.g., 1 hour)
            // await redis.set('productData', JSON.stringify(newData));

            return res.status(200).json(newData);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch and cache data' });
        }
    // }
};

