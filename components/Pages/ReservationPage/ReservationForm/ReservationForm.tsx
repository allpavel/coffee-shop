import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './ReservationForm.module.css';

type Inputs = {
  name: string;
  phone: string;
  seats: string;
  date: string;
  time: string;
  email: string;
  notes: string;
};

export const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Reservation Form</h1>
          <p>
            Make living grass created deep face moving wherein together us dry rule likeness divide divided said male
            fifth. He very spirit, face spirit evening days tree behold creepeth them fruit subdue male place under
            won't beginning moveth appear firmament earth under Us gathering beast and given saw fruit years second
            seas. Together likeness after he unto, day lesser unto good them male make all. Sea so evening To don't our.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.form_content}>
            <input type="text" placeholder="Name*" className={styles.form_input} />
            <input type="text" placeholder="Phone*" className={styles.form_input} />
            <input type="text" placeholder="Seats*" className={styles.form_input} />
            <input type="date" placeholder="dd.mm.yyyy" className={styles.form_input} />
            <input type="text" placeholder="Time" className={styles.form_input} />
            <input type="text" placeholder="Email*" className={styles.form_input} />
          </div>
          <textarea placeholder="Notes" rows="5" className={`${styles.form_input} ${styles.form_textarea}`} />
          <input type="submit" className={`${styles.form_input} ${styles.form_button}`} />
        </form>
      </div>
    </section>
  );
};
