import React from 'react'
import CardSignos from '../../components/CardSigno/CardSigno'
import Header from '../../components/Header/Header'
import {LibraIcon, LeaoIcon, CapricornioIcon, TouroIcon, PeixesIcon, CancerIcon, SargitaroIcon, EscorpiaoIcon, AquarioIcon, VirgemIcon,
GemeosIcon} from '../../constants/Iconsurl' 

const HomePage = () => {
  return (
    <div>
        <Header/>
        <div>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
            <CardSignos/>
        </div>
    </div>
  );
}

export default HomePage;
