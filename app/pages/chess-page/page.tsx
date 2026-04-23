import Answers from '@/app/components/answers/Answers'
import CourseContent from '@/app/components/course-content/CourseContent'
import HeroChess from '@/app/components/hero-chess/HeroChess'
import Info from '@/app/components/info-chess/InfoChess'
import SchoolChildrens from '@/app/components/schoolchildrens/Schoolchildrens'
import SignUp from '@/app/components/signUp-chess/SignUp'
import Teachers from '@/app/components/teachers/Teachers'

export default function ChessPage() {
  return (
    <>
      <HeroChess />
      <Info />
      <SignUp />
      <SchoolChildrens />
      <CourseContent />
      <Teachers />
      <Answers />
    </>
  )
}