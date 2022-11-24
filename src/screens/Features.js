import React from 'react'
import '../App.css';
import image from '../assets/Illustration 2.svg'
import right from '../assets/right.svg'

const Features = () => {
  return (
    <div className='maincontainer'>
        <div className='row'>
            <div className='col-6'>
            <img className='image' src={image} alt='img'  />
            </div>
            <div className='col-6'>
                <h3>We Provide Many<br/> Features You Can Use</h3>
                <h4>
                You can explore the features that we provide with fun and have their own functions each feature.
                </h4>
                <div className='col-12'>
                    <div className='col-1'>
                    <img className='imagemini' src={right} alt='img'  />
                    </div>
                    <div className='col-4'>
                    <label>Powerfull online protection.</label>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-1'>
                    <img className='imagemini' src={right} alt='img'  />
                    </div>
                    <div className='col-4'>
                    <label>Internet without borders.</label>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-1'>
                    <img className='imagemini' src={right} alt='img'  />
                    </div>
                    <div className='col-4'>
                    <label>Supercharged VPN.</label>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-1'>
                    <img className='imagemini' src={right} alt='img'  />
                    </div>
                    <div className='col-4'>
                    <label>No specific time limits.</label>
                    </div>
                </div>
            </div>

        </div>
        Features
        </div>
  )
}

export default Features