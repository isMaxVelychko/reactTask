import React from 'react';
import { connect } from 'react-redux';
import Tables from '../components/Tables';
import { updateTables, fetchData } from '../actions';

const mapStateToProps = (state) => {
    let newTables = state.tables.slice();
    return {
        tables: newTables,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTables: () => {
            dispatch(updateTables());
        },
        fetchData: () => {
            dispatch(fetchData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);