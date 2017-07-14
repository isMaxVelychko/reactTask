
const initialState = {
    tables: [],
};

let update = (state) => {
    const tables = state.tables;
    tables.forEach(table => {
        table.participants.forEach(item => {
            if(Math.random() >= 0.5) {
                item.active = !item.active;
            }
        });
    });

    return Object.assign({}, state, {tables});
};

const tables = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return state;
        case 'RECEIVE_DATA':
            return Object.assign({}, state, {
                tables: action.data.tables,
                loaded: true,
            });
        case 'UPDATE_TABLES':
            if (state.loaded) {
                return update(state);
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default tables;
