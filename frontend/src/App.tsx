import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SingIn'
import { Blog } from './pages/Blog'
import { CreateBlog } from './pages/create_blogs'
import { ViewBlogs } from './pages/view_blogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/blog/create' element={<CreateBlog/>}/>
          <Route path='/dashboard' element={<ViewBlogs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App