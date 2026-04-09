import Courses from './components/courses/Courses'
import Hero from './components/hero/Hero'
import Invitation from './components/invitation/Invitation'
import Reviews from './components/reviews/Reviews'
import Welcome from './components/welcome/Welcome'

export default function Home() {
  return (
    <>    
      <Hero />
      <Courses /> 
      <Invitation />
      <Reviews />
      <Welcome />
    </>
  )
}
