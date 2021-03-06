import React from 'react';
import ReactDOM from 'react-dom';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.state = { data: JSON.stringify(this.props.mockData, null, "  ") }
    }

    dataChanged(event) {
        this.setState({ data: event.target.value }, () => {
            this.props.updateRawData(this.state.data);
        });
    }

    render() {
        return (
            <div className='editor'>
                <textarea value={this.state.data} onChange={this.dataChanged} />
            </div>
        );
    }
}

export default Editor;