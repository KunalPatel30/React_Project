import React from 'react'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Card from '../Component/Card'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
        <div className="main">
            <Header/>
            <div className="content">
                <Banner img='https://www.u-tokyo.ac.jp/content/400117326.jpg'/>
                <Card img='https://cdn.pixabay.com/photo/2021/10/14/03/19/tomato-6707992_960_720.png' title='Tomato' price='$20'/>
                <Card img='https://www.pngplay.com/wp-content/uploads/2/Onion-Transparent-Background.png' title='Onion' price='$50'/>
                <Card img='https://pngfolio.com/images/all_img/copy/1638796606potato-png.png' title='Potato' price='$10'/>
                <Card img='https://www.pngmart.com/files/15/Bitter-Gourd-PNG.png' title='Bitter Gourd' price='$40'/>
                <Card img='https://cdn.pixabay.com/photo/2018/05/10/22/49/bellpepper-3389029_640.png' title='Yellow Chili' price='$30'/>
                <Card img='https://www.pngplay.com/wp-content/uploads/10/Brinjal-Transparent-Images.png' title='Brinjal' price='$100'/>
                <Banner img='https://cdn.shopify.com/s/files/1/0629/6400/7126/files/Mount_Local_Great_Fresh_Fruit_and_Vege.png?v=1643686548'/>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home