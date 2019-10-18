import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            
         }
    }
    render()    { 

 
        return ( <div className="container card"> 
        <div className=' title'><h2>Banque gomycode </h2>
        </div>
        <div className='image' >
            <img src='https://making-the-web.com/sites/default/files/clipart/176482/sim-card-png-transparent-images-176482-3736944.png' alt='pus'/>
        </div>
        <div className='card-number'>{this.props.number}</div>
        <div className='card-date'>{this.props.date}</div>
        <div className='logo d-flex justify-content-between'>
            <div className='foulen'>{this.props.owner}</div>
            <img src='http://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png' alt='logo'/>
        </div>
        </div> );
    }
}
 
export default Card;