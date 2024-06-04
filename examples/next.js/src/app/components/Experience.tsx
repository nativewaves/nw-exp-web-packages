'use client'

import { ExperienceBaseStandalone } from '@nativewaves/exp-default'
import { Env, PlaybackContainer, ThemeProvider } from '@nativewaves/exp-core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HashRouter as Router } from 'react-router-dom'


const queryClient = new QueryClient()

type ExperienceProps = {
    manifestId: string
    envType: Env
}

const Experience: React.FC<ExperienceProps> = ({ manifestId, envType }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PlaybackContainer
            manifestId={manifestId}
            envType={envType}
          >
            <ExperienceBaseStandalone routePath={'/'} />
          </PlaybackContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default Experience