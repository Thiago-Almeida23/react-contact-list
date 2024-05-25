import { Provider } from 'react-redux'
import Contatos from './containers/Contatos'
import { GlobalStyle } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Contatos />
      </div>
    </Provider>
  )
}

export default App
