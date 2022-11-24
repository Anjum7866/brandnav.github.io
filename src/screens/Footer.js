import React from 'react'
import '../App.css'
import logo from '../assets/Logo.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg';
import insta from '../assets/Instagram.svg'

const Footer = () => {
  return (
    <div className='col-12' style={{backgroundColor: '#F8F8F8', marginBottom:'100px'}}>
        <div className='col-3'>
        <img className={logo}src={logo} alt='img' style={{width:'150px'}} /><br/>
        <label><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</label>
        <div className='col-12'>
            <div className='col-1'><img className={logo}src={facebook} alt='img' style={{width:'20px'}} />
        </div>
            <div className='col-1'><img className={logo}src={twitter} alt='img' style={{width:'20px'}} />
        </div>
            <div className='col-1'><img className={logo}src={insta} alt='img' style={{width:'20px'}} />
        </div>
        </div>
        <lael>©2020LaslesVPN</lael>
        </div>

        <div className='col-3' style={{marginLeft:"400px"}}>
       <h4>Product</h4>
       <label>Download</label><br/>
       <label>Pricing</label><br/>
       <label>Location</label><br/>
       <label>Service</label><br/>
       <label>Countries</label><br/>
       <label>Blog</label><br/>
        </div>

        <div className='col-3'>
       <h4>Engage</h4>
       <label>LaslesVPN ? </label><br/>
       <label>FAQ</label><br/>
       <label>Tutorials</label><br/>
       <label>About Us</label><br/>
       <label>Privacy Policy</label><br/>
       <label>Terms & Conditions</label><br/>
        </div>

        <div className='col-3'>
       <h4>Earn Money</h4>
       <label>Affilate</label><br/>
       <label>Became Partner</label><br/>
        </div>

    </div>
  )
}

export default Footer