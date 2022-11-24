import React from 'react';
import global from '../assets/Global.svg';
import netflix from '../assets/Netflix.svg';
import spotify from '../assets/Spotify.svg';
import amazon from '../assets/Amazon.svg';
import discord from '../assets/Discord.svg';
import reddit from '../assets/reddit.svg'
import '../App.css';

const Global = () => {
  return (
    <div className='maincontainer'>
    <h3>Huge Global Network of Fast VPN</h3>
    <br/><br/>
    <img className='imagefull' src={global} alt='img'  />
    <br/><br/>
    <div className='rowcontainer'>
    <div className='col-2'>
    <img className='imagesmall' src={netflix} alt='img'  />
    </div>
    <div className='col-2' style={{marginTop:"10px"}}>
    <img className='imagesmall' src={reddit} alt='img'  />
    </div>
    <div className='col-2'>
    <img className='imagesmall' src={amazon} alt='img'  />
    </div>
    <div className='col-2'>
    <img className='imagesmall' src={discord} alt='img'  />
    </div>
    <div className='col-2'>
    <img className='imagesmall' src={spotify} alt='img'  />
    </div>
    </div>
    </div>
  )
}

export default Global