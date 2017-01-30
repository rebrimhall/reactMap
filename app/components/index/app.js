import React from 'react';
import Map from './Map';


export default class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="content-container">
                        <Map ref="Map" data={this.props.data}/>
                </div>
            </div>
        );
    }
}

