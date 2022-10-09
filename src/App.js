import React from 'react'
import Card from './components/card'
import './styles/App.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
    <div className='container'>
      <h1 hidden>React practice</h1>
      <Card/>
    </div>
    </QueryClientProvider>
  )
}
export default App
