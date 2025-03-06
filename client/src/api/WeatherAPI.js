const getWeather = async () => {
    try {
        const lat = 0; // Replace with actual latitude value
        const lon = 0; // Replace with actual longitude value
        const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Invalid user API response, check network tab!');
        }
        return await response.json();
    }
    catch (err) {
        console.error('Error from data retrieval:', err);
        return [];
    }
};
export { getWeather };
