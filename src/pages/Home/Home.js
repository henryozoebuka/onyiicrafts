import React from 'react'
import './Home.css'
import Title from '../../components/Title/index.jsx'
import SubTitle from '../../components/SubTitle/index.jsx'
import Gallery from '../../components/Gallery/index.jsx'
import Slides from '../../components/Slides/index.jsx'
import Card from '../../components/Card/index.jsx'
import cardImage1 from '../../assets/images/Capture3.PNG'
import cardImage2 from '../../assets/images/office-workers2.PNG'
import signature from '../../assets/images/signature.PNG'
import humanImage1 from '../../assets/images/Capture4.PNG'
import alphabetA from '../../assets/images/alphabet-a.png'
import ProfileCard from '../../components/ProfileCard/index.jsx'
import SmallCards from '../../components/SmallCards/index.jsx'
import CustomerReviews from '../../containers/CustomerReviews/index.jsx'
import GoogleMap from '../../containers/GoogleMap/index.jsx'
import SubHeader from '../../components/SubHeader/SubHeader.jsx'


const Home = () => {
  return (
    <div>
      <SubHeader />
      <Title title={'Product Gallery'} />
      <SubTitle subTitle={'The brand’s signature is undivided attention to detail.'} />
      <Gallery />
      <Title title={'Product Description'} />
      <SubTitle subTitle={'Nanotechnology immersion along the information highway.'} />
      <Slides />
      <Card backgroundImage={cardImage1} cardTitleColor={'#000000'} descriptionColor={'#000000'} backgroundColor={'rgba(0, 0, 0, 0.5)'} cardTitle={'THERE IS A STORY BEHIND EVERY WOOD PIECE'} borderColor={'#cb9565'} description viewButtonText={'View More'} linkColor={'#ffffff'} />
      <ProfileCard subTitleColor={'#cb9565'} image={humanImage1} title={'WE MAKE WHAT WE LOVE'} subTitle={'We love what we do.'} description={'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'} signature={signature} />
      <SmallCards />
      <Card backgroundImage={cardImage2} cardTitleColor={'#ffffff'} descriptionColor={'#ffffff'} backgroundColor={'rgba(0, 0, 0, 0.5)'} cardTitle={'MEET THE CREW'} borderColor={'#ffffff'} description={'Woodworking is the activity or skill of making items from wood, and includes cabinet making, wood carving, joinery, carpentry, and woodturning.'} viewButtonText={'View More'} linkColor={'#ffffff'} />
      <CustomerReviews image={alphabetA} />
      <GoogleMap />
    </div>
  )
}

export default Home