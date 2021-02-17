import React from 'react'
import CardSignos from '../../components/CardSigno/CardSigno'
import Header from '../../components/Header/Header'
import {AriesIcon, LibraIcon, LeaoIcon, CapricornioIcon, TouroIcon, PeixesIcon, CancerIcon, SargitaroIcon, EscorpiaoIcon, AquarioIcon, VirgemIcon,
GemeosIcon} from '../../constants/Iconsurl' 

const HomePage = () => {
  return (
    <div>
        <Header/>
        <div>
            <CardSignos
                signo="Aquário" startData="21/01"
                endData="19/02" image={AquarioIcon}
             />

            <CardSignos
                signo="Peixes" startData="20/02" 
                endData="20/03" image={PeixesIcon}
            />
            
            <CardSignos
                signo="Áries" startData="21/03"
                endData="20/04" image={AriesIcon}
            />
            
            <CardSignos
                signo="Touro" startData="21/04"
                endData="21/05" image={TouroIcon}
            />

            <CardSignos
                signo="Gemeos" startData="22/05"
                endData="21/06" image={GemeosIcon}
            />

            <CardSignos
                signo="Câncer" startData="21/06"
                endData="23/07" image={CancerIcon}
            />

            <CardSignos
                signo="Leão" startData="24/07"
                endData="23/08" image={LeaoIcon}
            />

            <CardSignos
                signo="Virgem" startData="24/08"
                endData="23/09" image={VirgemIcon}
            />

            <CardSignos
                signo="Libra" startData="24/09"
                endData="23/10" image={LibraIcon}
            />

            <CardSignos
                signo="Escorpiao" startData="24/10"
                endData="22/11" image={EscorpiaoIcon}
            />

            <CardSignos
                signo="Sargitário" startData="23/11"
                endData="21/12" image={SargitaroIcon}
            />

            <CardSignos
                signo="Capricornio" startData="22/12"
                endData="21/01" image={CapricornioIcon}
            />
        </div>
    </div>
  );
}

export default HomePage;
