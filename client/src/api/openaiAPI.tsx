// const getDescription = async () => {
//     try {
//       const response = await fetch(`/api/openaiRoutes`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Invalid user API response, check network tab!');
//       }
//       return await response.json();
//     } catch (err) {
//       console.error('Error from data retrieval:', err);
//       return [];
//     }
//   };
//   export { getDescription };