import React from 'react'
import { SEO } from '../components/seo'
import StoreComponent from '../components/store'


const StorePage = () => {
  return (
    <>
      <SEO
        title={"آرتین اپ"}
        description={""}
        image={""}
        canonical={`https://www.artin.app/detection`}
      />
      <StoreComponent />
    </>
  )
}

export default StorePage