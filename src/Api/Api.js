const API_KEY = '34887876-89bff92d754edb3a579b9cb65';
const BASE_URL = 'https://pixabay.com/api/?';
export const BASE_PARAMS = {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
};

const searchParams = new URLSearchParams({
    ...BASE_PARAMS,
})

export const fetchPhotos = (request) => {
    return fetch(`${BASE_URL}key=${API_KEY}&${searchParams}&q=${request}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json();
    })
}

// fetch(`${BASE_URL}&key=${API_KEY}&${searchParams}`).then(response => {

//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json();
//     })
//     .then(console.log)