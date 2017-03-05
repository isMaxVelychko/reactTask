let initialState = {
    tables: [
        {
            name: 'Foo table',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Bar table',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Baz table',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Qux table',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
    ],
};

let getNewState = (state) => {
    let newState = Object.assign({}, state);

    newState.tables.forEach(table => {
        table.participants.forEach(item => {
            let randomValue = Math.random();
            if(randomValue >= 0.5) {
                item.active = !item.active;
            }
        });
    });

    return newState;
};

const tables = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TABLES':
            return getNewState(state);
        default:
            return state
    }
};

export default tables;
