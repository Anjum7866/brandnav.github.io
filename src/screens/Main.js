import React from 'react'
import '../App.css';
import image from '../assets/Illustration 1.svg'
import CustomizedButtons from './Button';
import user from '../assets/user.svg';
import location from '../assets/location.svg';
import group from '../assets/Group 1217.svg';

const Main = () => {
  return (
    <div>
 <div className='row'>
       
       <div className='col-6'>
      <h3 className='heading'>
        Want anything to be <br/> easy with LaslesVPN.</h3>
        <h4>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</h4>
       <CustomizedButtons />
       
       </div>
       <div className='col-6'>
       <img className='image' src={image} alt='img'  />
       </div>
     
       </div>

       <div className='row'>
       
       <div className='col-4'>
<div className='col-12' style={{padding:'20px'}}>
<img className='image' src={user} alt='img'  style={{width:'30px'}}/>
<label style={{marginTop:'40px'}}>90+ <br/>Users</label>

</div>
      
       </div>
       <div className='col-4'>
        <div className='col-12'>
        <img className='image' src={location} alt='img' style={{width:'30px'}} />
        <label style={{marginTop:'40px'}}>30+ <br/>Locations</label>

        </div>
       
       </div>

       <div className='col-4'>
        <div className='col-12'>
        <img className='image' src={group} alt='img' style={{width:'30px'}} />
        <label style={{marginTop:'40px'}}>50+ <br/>Servers</label>

        </div>
       
       </div>
     
       </div>
    </div>
   
  )
}

export default Main