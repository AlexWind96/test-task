import { Container } from '@mantine/core'
import '@mantine/core/styles.css'
import { SearchBar } from '@/features/search-bar'
import { IconsProvider, MantineProvider, QueryClientProvider } from './providers'

export default function App() {
  return (
    <QueryClientProvider>
      <IconsProvider>
        <MantineProvider>
          <Container mt={'xl'} fluid>
            <SearchBar />
          </Container>
        </MantineProvider>
      </IconsProvider>
    </QueryClientProvider>
  )
}
