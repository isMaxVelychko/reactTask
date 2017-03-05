import React from 'react';
import classNames from 'classnames';

class Table extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="tableWrapper">
                <div className="header">
                    <h3>{this.props.data.name}</h3>
                </div>
                <div className="content">
                    {this.renderContent()}
                </div>
            </div>
        );
    }

    renderContent() {
        return this.props.data.participants.map((item, index) => {
            let classes = classNames({
                'item': true,
                'active': item.active,
            });

            return (
                <div key={index} className={classes}></div>
            )
        });
    }
}

Table.propTypes = {
    data: React.PropTypes.object.isRequired,
};


export default Table;