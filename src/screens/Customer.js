import React from 'react';
import ellipse from '../assets/Ellipse 175.png'
import ellipseone from '../assets/Ellipse 175 (1).png';
import ellipsetwo from '../assets/Ellipse 175 (2).png';
import '../App.css';

const Customer = () => {
  return (
    <div className='maincontainer' style={{backgroundColor: '#F8F8F8'}}>
     <h2>Trusted by Thousands of <br/>Happy Customer</h2> 
     <h4>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</h4>
        
    <div className='col-12' style={{marginLeft:"100px"}}>
        <div className='col-3' >  
            <div className='container' >
                <div className='col-12'>
                    <img className='imagesmallest' src={ellipse} alt='img'  />
                        <label style={{margin:'25px'}}><b>Viezh Robert</b>   <br/>Warsaw, Poland</label>
                </div>
                
                <h6>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</h6>
            <br/>
            </div>
        </div>
        <div className='col-3' style={{marginLeft:"50px"}}>  
            <div className='container'>
                <div className='col-12'>
                    <img className='imagesmallest' src={ellipseone} alt='img'  />
                    <label style={{margin:'25px'}}><b>Yessica Christy</b><br/>Shanxi, China</label> 
                </div>
                <p></p>
                <h6>“I like it because I like to travel far and still can connect with high speed.”.</h6>
                <br/><br/>
            </div>
        </div>
        <div className='col-3' style={{marginLeft:"50px"}}>  
            <div className='container'>
                <div className='col-12'>
                    <img className='imagesmallest' src={ellipsetwo} alt='img'  />
                        <label style={{margin:'25px'}}><b>Viezh Robert</b><br/>Kim Young Jou</label>
                </div>
                <h6>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</h6>
                <br/>
            </div>
        </div>
    </div>
    </div>

    
  )
}

export default Customer