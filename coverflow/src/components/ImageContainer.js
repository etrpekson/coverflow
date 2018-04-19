import React, { PureComponent } from 'react';
import PropTypes from 'proptypes';

import labelStyle from './styles/labelStyle';
import centerDivStyle from './styles/centerDivStyle';
import imgStyle from './styles/imgStyle';
import emptyImg from './styles/emptyImg';

import farLeftDiv from './styles/farLeftDiv'
import rightDivStyle from './styles/rightDivStyle';
import leftDivStyle from './styles/leftDivStyle';
import farRightDiv from './styles/farRightDiv';

class ImageContainer extends PureComponent{
    determineImage = (url, title) => {
        if(url === ''){
            return(
                <div style={emptyImg}>
                    {title}
                </div>
            );
        }
        return (
            <img src={url} style={imgStyle} alt={title} />
        );
    }

    render(){        
        const { title, url, index, currentIndex, listLength } = this.props; 
        let leftMost = currentIndex - 2;
        let left = currentIndex - 1;
        let right = currentIndex + 1;
        let rightMost = currentIndex + 2;

        // if next item is first item on the list
        if(right === listLength)
            right = 0;
        
        if(rightMost === listLength) // if right most item is first item on the list
            rightMost = 0;
        else if(rightMost > listLength) // if right most item is second on the list
            rightMost = 1;        

        if(left < 0) // if previous item is the last item on the list
            left = listLength - 1;        

        if(leftMost === -1) // if  left most item is the last item on the list
            leftMost = listLength - 1;
        else if(leftMost === -2) // if left most item is second to the last item on the list
            leftMost = listLength - 2;                

        let label = '';
        if(index === currentIndex){ // only display label on selected item
            label = (title !== '') ? (<div style={labelStyle}>{title}</div>) : ''; // no label will be displayed if title props is empty
        }
        
        // assign styles to respective divs (depending on their index and the currentIndex (which is the state))
        let divStyle;
        if(index === currentIndex)
            divStyle = centerDivStyle;                    
        else if(index === left)
            divStyle = leftDivStyle;        
        else if(index === leftMost)
            divStyle = farLeftDiv;                    
        else if(index === right)
            divStyle = rightDivStyle;        
        else if(index === rightMost)
            divStyle = farRightDiv;  
                   
        return(            
            <div>
                <div style={divStyle}>
                    {this.determineImage(url, title)}
                    <center>{label}</center>
                </div>
            </div>
        );
    }        
}

ImageContainer.PropTypes = {
    title: PropTypes.string,
    url: PropTypes.string,    
    currentIndex: PropTypes.number,
    index: PropTypes.number,
    listLength: PropTypes.number
};

ImageContainer.defaultProps = {
    isCenterImage: false
}

export default ImageContainer;