import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './ReservationForm.module.css';

const Input = z.object({
  name: z.string({ required_error: 'Name is required' }).trim(),
  phone: z.string({ required_error: 'Phone is required' }).trim(),
  seats: z.coerce.number().gt(0, { message: 'Must be greater than 0' }).lt(10, { message: 'Must be less than 10' }),
  date: z.string({ required_error: 'Date is required' }).trim(),
  time: z.string({ required_error: 'Time is required' }).trim(),
  email: z.string({ required_error: 'Email is required' }).email().trim(),
  notes: z.string().trim(),
});

type Inputs = z.infer<typeof Input>;

export const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(Input) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(Input.parse(data));
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_content}>
            <input type="text" placeholder="Name*" className={styles.form_input} {...register('name')} />
            {errors.name?.message && <p>{errors.name.message}</p>}
            <input type="text" placeholder="Phone*" className={styles.form_input} {...register('phone')} />
            {errors.phone?.message && <p>{errors.phone.message}</p>}
            <input type="number" placeholder="Seats*" className={styles.form_input} {...register('seats')} />
            {errors.seats?.message && <p>{errors.seats.message}</p>}
            <input type="date" placeholder="dd.mm.yyyy" className={styles.form_input} {...register('date')} />
            {errors.date?.message && <p>{errors.date.message}</p>}
            <input type="text" placeholder="Time" className={styles.form_input} {...register('time')} />
            {errors.time?.message && <p>{errors.time.message}</p>}
            <input type="text" placeholder="Email*" className={styles.form_input} {...register('email')} />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <textarea
            placeholder="Notes"
            rows={5}
            className={`${styles.form_input} ${styles.form_textarea}`}
            {...register('notes')}
          />
          <input type="submit" className={`${styles.form_input} ${styles.form_button}`} />
        </form>
      </div>
    </section>
  );
};
