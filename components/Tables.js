import React from 'react';
import Table from '../components/Table';

class Tables extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchData();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                {this.renderTables()}
            </div>
        );
    }

    renderTables() {
        return this.props.tables.map((item, index) => {
            return <Table data={item} key={index}/>
        });
    }
}

Tables.propTypes = {
    tables: React.PropTypes.array.isRequired,
    updateTables: React.PropTypes.func.isRequired,
};

export default Tables;