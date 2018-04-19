import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './components/Carousel';
import registerServiceWorker from './registerServiceWorker';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(<Carousel />, document.getElementById('root'));
registerServiceWorker();
