import React from 'react'
import './home.css'
import Title from '../reusable/title_/Title'
import Paragraph from '../reusable/paragraph_/Paragraph'
import foodPic from '../../Assets/home-banner-image.png'

const Home = () => {
  return (
    <section className="home flex">
        <div className="content">
            <Title content='Your Favorite Food Delivery Hot & Fresh' />
            <Paragraph content='Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.' />
            <button className="btn padding30">Order Now</button>
        </div>
        <div className="image">
            <img src={foodPic} alt="" />
        </div>
    </section>
  )
}

export default Home