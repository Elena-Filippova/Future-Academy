import HeroEvent from '@/app/components/hero-event/HeroEvent'
import InfoEvent from '@/app/components/info-event/InfoEvent'
import PhotoEvent from '@/app/components/photo-event/PhotoEvent'
import ProgramEvent from '@/app/components/program-event/ProgramEvent'
import TeachersEvent from '@/app/components/teachers-event/TeachersEvent'

export default function EventPage() {
  return (
    <>
      <HeroEvent />
      <InfoEvent />
      <ProgramEvent/>
      <TeachersEvent />
      <PhotoEvent />
    </>
  )
}