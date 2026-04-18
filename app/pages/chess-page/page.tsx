import CourseContent from '@/app/components/course-content/CourseContent'
import HeroChess from '@/app/components/hero-chess/HeroChess'
import Info from '@/app/components/info-chess/InfoChess'
import SchoolChildrens from '@/app/components/schoolchildrens/Schoolchildrens'
import SignUp from '@/app/components/signUp-chess/SignUp'

export default function ChessPage() {
  return (
    <>
      <HeroChess />
      <Info />
      <SignUp />
      <SchoolChildrens />
      <CourseContent />
    </>
  )
}