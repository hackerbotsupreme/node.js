import React from "react";
import Images from './Images';

function Card(props){
    console.log(props)
    return (
        <React.Fragment>
            <div className='cards'>
                <div className='card'>
                <Images imgsrc={props.imgsrc}/>
                    
                    <div className='card__info'>
                        <span className='card__category'>{props.title}</span>
                        <h3 className='card__title'>{props.sname} </h3>
                        <h3 className='card__title'>{props.className} </h3>
                        <a href={props.link} target='_blank'>
                            <button>  Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
// <img src={props.imgsrc} height='600px' alt='myPic' className='card_img' />
export default Card;