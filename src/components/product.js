import React from 'react'
import beyonce from './Images/beyonce.jpg'
import './product.css'

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            initialRate:0
        }
    }
  handleIncrement=(event)=>
    this.setState({initialRate : this.state.initialRate +1})

  handleDecrement=(event)=>
  this.setState({initialRate : this.state.initialRate -1})
  
    render(){
           const{ artistImageUrl,artist,country,quote,submittedAvaterUrl}=this.props
        return(
            <div className='mainProduct'>
              <div className='artist-img-container'>
                <img className='artist-img' src={artistImageUrl} alt='Beyonce'/>
              </div>
                <div className='artist-info'>
                   <span>Artist : {artist}</span>
                   <span>Country : {country}</span>
                    <div>
                       Rate
                      <button style={{margin:2}} onClick={this.handleIncrement}>+</button>
                      <button onClick={this.handleDecrement}>-</button>
                      <span style={{marginLeft:'4px',borderRadius:'20%'}}>{this.state.initialRate}</span>
                   </div>
                   <div style={{display:'flex',lineHeight:'35px'}}>
                    <span style={{fontFamily:"cursive" ,fontSize:'12px'}}>{quote}</span>
                    <img className='quotes' style={{marginLeft:'8px',width:'8%',height:'5%',borderRadius:'50%'}} src={submittedAvaterUrl} alt='quote'/>
                   </div>
                   
                </div>
            </div>
        );

    }
}

export default Product