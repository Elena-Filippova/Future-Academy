import { Accordion } from '../accordion/Accordion'
import styles from './answers.module.css'

export default function Answers() {
  const items = [
    {
      title: 'Кому подойдёт это курс?',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus
          pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
          Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus,
          ex sapien ultricies leo, sit amet placerat arcu sem id sem.
        </p>
      ),
    },
    {
      title: 'Что нужно ребенку для занятий?',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus
          pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
          Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus,
          ex sapien ultricies leo, sit amet placerat arcu sem id sem.
        </p>
      ),
    },
    {
      title: 'Где можно узнать расписание занятий?',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus
          pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
          Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus,
          ex sapien ultricies leo, sit amet placerat arcu sem id sem.
        </p>
      ),
    },
    {
      title: 'Что делать, если ребенок пропустит занятие?',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus
          pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
          Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus,
          ex sapien ultricies leo, sit amet placerat arcu sem id sem.
        </p>
      ),
    },
  ]

  return (
    <section className={styles.answers}>
      <div className={styles.answersContainer}>
        <div className={styles.answersWrapper}>
          <h3 className={styles.answersTitle}>Найдите ответ на свой вопрос</h3>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  )
}