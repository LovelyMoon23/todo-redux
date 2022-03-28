import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Todo from 'todo/Todo'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  )
}
export default Routing
