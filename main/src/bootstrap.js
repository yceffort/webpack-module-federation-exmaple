import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const Counter = React.lazy(() => import('app1/Counter'))

function App() {
  return (
    <>
      <h1>Hello from React component</h1>
      <Suspense fallback="Loading Counter...">
        <Counter title={'hello, counter'} />
      </Suspense>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
