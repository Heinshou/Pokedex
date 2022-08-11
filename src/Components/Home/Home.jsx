import React from 'react'
import InputHome from './InputHome'
import image from '../../img/Pokedex.png'
import gif from '../../img/gifpokebola.gif'


const Home = ({setIsLogged}) => {
  return (
  <>
  <div className='Home'>
    <div className='container-home'>
        <img className='pokedex' src={image} alt="" />
        <img className='gif' src={gif} alt="" />
        <h1>¡Welcome Trainer!</h1>
        <p>To start, Tell me your name</p>
        <InputHome
        setIsLogged={setIsLogged}/>
    </div>
    <footer>
      <div className='container-div'>
        <div className='flag-red'></div>
        <div className='flag-black'></div>
        <div className='circle-black'>
          <div className='circle-white'>
            <div className='circle-black2'>
              <div className='circle-black-mate'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  

    
  </>
    
    
    
  )
}

export default Home