
const apiUrl = 'http://192.168.1.188:3000';

export const updateTables = () => ({
    type: 'UPDATE_TABLES',
});

export const receiveData = (data) => ({
    type: 'RECEIVE_DATA',
    data,
});

export const fetchData = () => {
     return (dispatch) => {
         return fetch(apiUrl)
             .then((response) => {
                 return response.json();
             })
             .then((data) => {
                 dispatch(receiveData(data));
             });
     }
};