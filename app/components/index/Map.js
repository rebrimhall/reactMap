import React from 'react';

export default class Map extends React.Component {

	componentDidMount(){

        console.log('component did mount')


	}

	render() {
		return (
                <div id="mapDiv" className="full-height">
                    <div id="basemapContainer" className="btn-group">
                        <img id="bmImage" src="/assets/site/images/satellite.jpg" className="img-rounded" alt="Streets" width="75" height="75"></img>
                        <button type="button" className="btn btn-xs" id="basemap">Satellite</button>
                    </div>
                </div>
		);
	}
}
