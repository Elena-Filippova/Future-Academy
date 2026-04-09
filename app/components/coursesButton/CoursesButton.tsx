import styles from './coursesButton.module.css'

interface ButtonProps {
  children: React.ReactNode
}

export default function CoursesButton({ children }: ButtonProps) {
  return (
    <button className={styles.coursesBtn}>
      {children}
    </button>
  )
}