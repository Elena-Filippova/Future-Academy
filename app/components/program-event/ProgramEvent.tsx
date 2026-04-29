import { AccordionEvent } from '../accordion-event/AccordionEvent'
import styles from './programEvent.module.css'

export default function ProgramEvent() {
  const items = [
    {
      title: 'День первый',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque
          vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc.
          Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit
          amet placerat arcu sem id sem.
        </p>
      ),
    },
    {
      title: 'День второй',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque
          vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc.
          Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit
          amet placerat arcu sem id sem.
        </p>
      ),
    },
    {
      title: 'День третий',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget
          venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt
          efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed
          nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque
          vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc.
          Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit
          amet placerat arcu sem id sem.
        </p>
      ),
    },
  ]

  return (
    <section className={styles.program}>
      <div className={styles.programContainer}>
        <div className={styles.programWrapper}>
          <h2 className={styles.programTitle}>Программа мероприятия</h2>
          <p className={styles.programDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo vestibulum eros. Cras dignissim mi quis
            fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor
            venenatis vel. In hac habitasse platea dictumst.
          </p>
          <AccordionEvent items={items} />
        </div>
      </div>
    </section>
  )
}