import React from 'react'
import CardSignos from '../../components/CardSigno/CardSigno'
import Header from '../../components/Header/Header'
import {AriesIcon, LibraIcon, LeaoIcon, CapricornioIcon, TouroIcon, PeixesIcon, CancerIcon, SargitaroIcon, EscorpiaoIcon, AquarioIcon, VirgemIcon,
GemeosIcon} from '../../constants/Iconsurl' 
import {FlexBox} from './HomeStyled'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <FlexBox>
            <CardSignos
                signo="Aquário" startDate="21/01"
                endDate="19/02" image={AquarioIcon}
             />

            <CardSignos
                signo="Peixes" startDate="20/02" 
                endDate="20/03" image={PeixesIcon}
            />
            
            <CardSignos
                signo="Áries" startDate="21/03"
                endDate="20/04" image={AriesIcon}
            />
            
            <CardSignos
                signo="Touro" startDate="21/04"
                endDate="21/05" image={TouroIcon}
            />

            <CardSignos
                signo="Gemeos" startDate="22/05"
                endDate="21/06" image={GemeosIcon}
            />

            <CardSignos
                signo="Câncer" startDate="21/06"
                endDate="23/07" image={CancerIcon}
            />

            <CardSignos
                signo="Leão" startDate="24/07"
                endDate="23/08" image={LeaoIcon}
            />

            <CardSignos
                signo="Virgem" startDate="24/08"
                endDate="23/09" image={VirgemIcon}
            />

            <CardSignos
                signo="Libra" startDate="24/09"
                endDate="23/10" image={LibraIcon}
            />

            <CardSignos
                signo="Escorpiao" startDate="24/10"
                endDate="22/11" image={EscorpiaoIcon}
            />

            <CardSignos
                signo="Sargitário" startDate="23/11"
                endDate="21/12" image={SargitaroIcon}
            />

            <CardSignos
                signo="Capricornio" startDate="22/12"
                endDate="21/01" image={CapricornioIcon}
            />
        </FlexBox>
    </div>
  );
}

export default HomePage;
