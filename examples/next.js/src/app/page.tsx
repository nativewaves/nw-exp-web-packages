'use client'

import dynamic from 'next/dynamic'

const Experience = dynamic(() => import('./components/Experience'), { ssr: false })

export default function Home() {
  return (
    <>
      <Experience
        manifestId='<manifestId here>'
        envType='<envType here: test, dev, or prod>'
      />
    </>
  )
}
