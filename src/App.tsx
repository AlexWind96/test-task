import { QueryClientProvider } from '@tanstack/react-query'
import { IconContext } from 'react-icons'
import { Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { SearchBar } from '@/features/search-bar'
import { queryClient } from '@/shared/libs'
import { theme } from '@/shared/theme'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <MantineProvider theme={theme}>
          <Container mt={'xl'} fluid mx={'1rem'}>
            <SearchBar />
          </Container>
        </MantineProvider>
      </IconContext.Provider>
    </QueryClientProvider>
  )
}
