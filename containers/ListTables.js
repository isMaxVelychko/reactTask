import React from 'react';
import { connect } from 'react-redux';
import Tables from '../components/Tables';
import { updateTables } from '../actions';

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTables: () => {
            dispatch(updateTables());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);