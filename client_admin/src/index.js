import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { persistor, store } from './app/store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import config from './config'

import 'bootstrap/dist/css/bootstrap.min.css'

// Check if all environment variables are set
config.checkEnvVariables()

const Router = config.isProduction ? HashRouter : BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate
        loading={<div>Loading redux state...</div>}
        persistor={persistor}
      >
        <Router>
          <Suspense fallback={<div>Loading route...</div>}>
            <App />
          </Suspense>
        </Router>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
