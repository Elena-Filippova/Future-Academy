import Link from 'next/link'
import styles from './coursesButton.module.css'

interface ButtonProps {
  children: React.ReactNode,
  href: string,
}

export default function CoursesButton({ children, href }: ButtonProps) {
  return (
    <Link href={href} className={styles.coursesBtn}>
      {children}
    </Link>
  )
}