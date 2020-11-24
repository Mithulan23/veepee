import React from 'react';
import './App.sass';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import destinations from './images/destinations.PNG'
import hyatt from './images/HYATT_REGENCY_CREEK.png'
import laguna from './images/LAGUNA_BEACH.png'
import fairmont from './images/FAIRMONT_DUBAI.png'
import sthala from './images/STHALA_MARC_PATRA.png'
import noku from './images/NOKU_MALDIVES.png'
import impiana from './images/IMPIANA_RESORT_SAMUI.png'
import clos from './images/CLOS_DU_LITTORAL.png'
import echapee from './images/ECHAPEE_SRI_LANKAISE.png'
import japon from './images/JAPON.jpg'
import entre from './images/ENTRE_CULTURE_ET_PLAGES.png'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function App() {
  return (
    <div className="App">
      <h1 className="medium">DÉCOUVREZ LES OFFRES DU MOMENT</h1>

      <h2 className="light">VOL + HÔTEL JUSQU'À -70%</h2>

      <hr width="150px" size="5" color="black" />

      <div className="destinations">
        <img src={destinations} alt="DESTINATIONS" />
      </div>


      <div className="containers">
      
      <div className="container">
        <img src={hyatt} alt="Hyatt Regency Creek" width="300px" />
        <text className="country1">Emirates Arabes Unis</text>
        <text className="place1">Dubaï</text><br/>
        <text className="label1">Hyatt Regency Creek</text><br/>
        <div className="contlabelniv1">
          <text className="labelniv1">PREMIUM</text>
        </div>
        <div className="contlabelopt1">
          <text className="labeltext1">SURCLASSEMENT OFFERT</text>
        </div>
        <hr className="trait1" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={laguna} alt="Laguna Beach Hotel & Spa" width="300px" />
        <text className="country2">Maurice</text>
        <text className="place2">Grand Rivière</text><br/>
        <text className="label2">Laguna Beach Hotel & Spa</text><br/>
        <div className="contlabelniv2">
          <text className="labelniv2">TOUT INCLUS</text>
        </div>
        <div className="contlabelopt2">
          <text className="labeltext2">SPA</text>
        </div>
        <hr className="trait2" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={fairmont} alt="Fairmont Dubaï" width="300px" />
        <text className="country3">Emirates Arabes Unis</text>
        <text className="place3">Dubaï</text><br/>
        <text className="label3">Fairmont Dubaï</text><br/>
        <div className="contlabelniv3">
          <text className="labelniv3">PREMIUM</text>
        </div>
        <div className="contlabelopt3">
          <text className="labeltext3">ROOFTOP</text>
        </div>
        <hr className="trait3" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={sthala} alt="Combiné Sthala - Marc - Patra" width="300px" />
        <text className="country4">Indonésie</text>
        <text className="place4">Bali & Gili</text><br/>
        <text className="label4">Combiné Sthala - Marc - Patra</text><br/>
        <div className="contlabelniv4">
          <text className="labelniv4">COMBINÉ</text>
        </div>
        <div className="contlabelopt4">
          <text className="labeltext4">PETIT DÉJEUNER INCLUS</text>
        </div>
        <hr className="trait4" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={noku} alt="Noku Maldives" width="300px" />
        <text className="country5">Maldives</text>
        <text className="place5">Atoll de Noonu</text><br/>
        <text className="label5">Noku Maldives</text><br/>
        <div className="contlabelniv5">
          <text className="labelniv5">PREMIUM</text>
        </div>
        <div className="contlabelopt5">
          <text className="labeltext5">MASSAGE OFFERT</text>
        </div>
        <hr className="trait4" width="15px" size="2" color="black" />
      </div>
      </div>


      <div className="containers">
      
      <div className="container">
        <img src={impiana} alt="Impiana Resort Samui" width="300px" />
        <text className="country6">Thaïlande</text>
        <text className="place6">Koh Samui</text><br/>
        <text className="label6">Impiana Resort Samui</text><br/>
        <div className="contlabelniv6">
          <text className="labelniv6">MASSAGE OFFERT</text>
        </div>
        <div className="contlabelopt6">
          <text className="labeltext6">SURCLASSEMENT OFFERT</text>
        </div>
        <hr className="trait6" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={clos} alt="Clos du Littoral" width="300px" />
        <text className="country7">Maurice</text>
        <text className="place7">Grand Baie</text><br/>
        <text className="label7">Clos du Littoral</text><br/>
        <div className="contlabelniv7">
          <text className="labelniv7">PREMIUM</text>
        </div>
        <div className="contlabelopt7">
          <text className="labeltext7">VILLAS AVEC PISCINE PRIVÉE</text>
        </div>
        <hr className="trait7" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={echapee} alt="Echappée SriLankaise" width="300px" />
        <text className="country8">Sri Lanka</text>
        <text className="place8">Sri Lanka</text><br/>
        <text className="label8">Echappée SriLankaise</text><br/>
        <div className="contlabelniv8">
          <text className="labelniv8">CIRCUIT</text>
        </div>
        <div className="contlabelopt8">
          <text className="labeltext8">PRIVATIF</text>
        </div>
        <hr className="trait8" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={japon} alt="Grand Arc Hanzomon" width="300px" />
        <text className="country9">Japon</text>
        <text className="place9">Tokyo</text><br/>
        <text className="label9">Grand Arc Hanzomon</text><br/>
        <div className="contlabelniv9">
          <text className="labelniv9">CITY BREAK</text>
        </div>
        <div className="contlabelopt9">
          <text className="labeltext9">INSOLITE</text>
        </div>
        <hr className="trait9" width="15px" size="2" color="black" />
      </div>

      <div className="container">
        <img src={entre} alt="Entre Culture et Plages" width="300px" />
        <text className="country10">Vietnam</text>
        <text className="place10">De Hanoï à Hoi An</text><br/>
        <text className="label10">Entre Culture et Plages</text><br/>
        <div className="contlabelniv10">
          <text className="labelniv10">CIRCUIT</text>
        </div>
        <div className="contlabelopt10">
          <text className="labeltext10">PRIVATIF</text>
        </div>
        <hr className="trait10" width="15px" size="2" color="black" />
      </div>
      </div>


      <Carousel className="carousel" breakPoints={breakPoints}>
        <Item>
          <img src={hyatt} alt="Hyatt Regency Creek" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={laguna} alt="Laguna Beach Hotel & Spa" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={fairmont} alt="Fairmont Dubaï" width="100%" height="100%" />
        </Item>
        <Item>
        <img src={sthala} alt="Combiné Sthala - Marc - Patra" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={noku} alt="Noku Maldives" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={impiana} alt="Impiana Resort Samui" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={clos} alt="Clos du Littoral" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={echapee} alt="Echappée SriLankaise" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={japon} alt="Grand Arc Hanzomon" width="100%" height="100%" />
        </Item>
        <Item>
          <img src={entre} alt="Entre Culture et Plages" width="100%" height="100%" />
        </Item>
      </Carousel>

      <div className="footer">
        <text className="rejoignez">REJOIGNEZ </text>
        <text className="emirates">EMIRATES | THE LIST</text> <br />
        <text className="vol">VOL + HÔTEL NÉGOCIÉS JUSQU'À -70%</text>
        <hr className="traitfooter" width="270px" size="5" color="#c60800" />
      </div>
    </div>
  );
}

export default App;
