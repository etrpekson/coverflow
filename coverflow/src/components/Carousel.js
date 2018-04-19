import React, { PureComponent } from 'react';
import Slider from 'react-slick';

import ImageContainer from './ImageContainer';

import imageList from './data/imageList';

import containerStyle from './styles/containerStyle';

class Carousel extends PureComponent {
  state = {    
    currentIndex: 0   
  };
  
  generateList = () => { 
    const { currentIndex } = this.state;
    const imageListLength = imageList.length;  
    return imageList.map(
      (img, index) => {         
        return <ImageContainer 
                  key={index} 
                  url={img.url} 
                  title={img.title}
                  index={index}
                  currentIndex={currentIndex}
                  listLength={imageListLength}
                />;
      }
    ); 
  }

  onChange = (index) => {
    this.setState({      
      currentIndex: index
    });
  };

  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 3,
      speed: 500,
      initialSlide: 0, 
      focusOnSelect: true     
    };      
    
    return (  
      <div style={containerStyle}>
        <Slider 
          {...settings} 
          afterChange={this.onChange}
        >
          {this.generateList()}
        </Slider>
      </div>      
    );
  }
}

export default Carousel;
