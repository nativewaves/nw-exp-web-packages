'use client'

import { ExperienceBaseStandalone } from '@nativewaves/exp-default'
import { PlaybackContainer, ThemeProvider } from '@nativewaves/exp-core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PlaybackContainer
            manifestId='<manifestId here>'
            envType='<envType here: test, dev, or prod>'
          >
            <ExperienceBaseStandalone routePath={'/'} />
          </PlaybackContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
