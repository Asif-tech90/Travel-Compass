import axios from "axios";

// Initialize cache
const placesCache = new Map();

const getCacheKey = (sw, ne) => {
  return `${sw.lat}_${sw.lng}_${ne.lat}_${ne.lng}`;
};

export const getPlacesData = async (sw, ne) => {
  const cacheKey = getCacheKey(sw, ne);

  // Return cached data if available
  if (placesCache.has(cacheKey)) {
    return placesCache.get(cacheKey);
  }

  try {
    const { data } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    // Filter valid results and cache them
    const validData = data.data.filter(
      (item) => item.latitude && item.longitude
    );

    placesCache.set(cacheKey, validData);

    return validData;
  } catch (error) {
    console.error("API Error:", error);
    // Cache empty array to prevent retries
    placesCache.set(cacheKey, []);
    return [];
  }
};
