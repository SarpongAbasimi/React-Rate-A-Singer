import React from 'react'
import './app.css'
import Product from './components/product'
import data from './components/data'




class App extends React.Component{
    render(){
         const artistInfo= data.map((artistInfo)=> 
            <Product key={artistInfo.id}
                     artist={artistInfo.artist}
                     country={artistInfo.country}
                     artistImageUrl={artistInfo.artistImageUrl}
                     description={artistInfo.description}
                     quote={artistInfo.quote}
                     submittedAvaterUrl={artistInfo.submitterAvatarUrl}
            />
            );
        return(
            <div className='mainApp'>
                    {artistInfo}
            </div>
        );
    }
}

export default App