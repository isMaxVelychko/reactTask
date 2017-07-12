export const updateTables = () => ({
    type: 'UPDATE_TABLES',
});

export const requestData = () => ({
    type: 'REQUEST_DATA',
});

export const receiveData = (data) => ({
    type: 'RECEIVE_DATA',
    data,
});

export const fetchData = () => {
     return (dispatch) => {
         dispatch(requestData());
         return fetch(`http://192.168.1.188:3000`)
             .then((response) => {
                 return response.json();
             })
             .then((data) => {
                 dispatch(receiveData(data));
             });
     }
};