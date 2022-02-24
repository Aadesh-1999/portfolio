import React from 'react';
import './Styles/card.css';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div>
            <div className="card d-flex justify-content-center" style={{"height":props.height,"width":props.width}}>
                <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title skill-logo"><i class={props.cardImgClass}></i></h5>
                    <h6 className="card-subtitle mb-2 ">{props.cardName}</h6>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    cardImgClass: "fa-brands fa-html5",
    cardName: "",
    height:"100%",
    width:"100%"
}
Card.propTypes = {
    cardImgClass: PropTypes.string,
    cardName: PropTypes.string
}