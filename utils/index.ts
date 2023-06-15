export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'd5c59da6dcmsh8a77083faf8f17ep15304bjsnf9ea4c9ce161',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const results = await response.json();

    return results;
}