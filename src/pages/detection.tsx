import React from 'react'
import { SEO } from '../components/seo'
// import DetectingComponent from '../components/detection'
import dynamic from 'next/dynamic'

const DetectingComponent = dynamic(() => import('../components/detection'), {
  ssr: false
})

const DetectionPage = () => {
  return (
    <>
      <SEO
        title={"آرتین اپ"}
        description={""}
        image={""}
        canonical={`https://www.artin.app/detection`}
      />
      <DetectingComponent />
    </>
  )
}

export default DetectionPage