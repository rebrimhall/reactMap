import React from 'react';
import {render} from 'react-dom';
import App from "../components/index/app";



window.App = render((
    <App data={window.APP_STATE}/>
), document.querySelectorAll('[data-ui-role="content"]')[0]);


