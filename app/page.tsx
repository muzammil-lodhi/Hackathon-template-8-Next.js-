import React from 'react'
import Feature from '@/components/feauture'
import Mainsection from '@/components/mainsection'
import Topcategory from '@/components/topcategory'
import Newstyle from '@/components/newstyle'
import OurProduct from '@/components/ourproduct'
import Footer from '@/components/footer'


export default function page() {
  return (
    <div>
      <Mainsection />
      <Feature />
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>

    </div>
  )
}

