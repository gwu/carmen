import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import CarmenApp from 'components/carmen-app'

function main () {
  ReactDOM.render(
    <AppContainer>
      <CarmenApp />
    </AppContainer>,
    window.document.getElementById('main')
  )
}

main()
