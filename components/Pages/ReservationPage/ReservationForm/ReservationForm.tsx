import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './ReservationForm.module.css';

const Input = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  phone: z.string().trim().min(1, { message: 'Phone is required' }),
  seats: z.coerce.number().gt(0, { message: 'Must be greater than 0' }).lt(10, { message: 'Must be less than 10' }),
  date: z.string().trim().min(1, { message: 'Date is required' }),
  time: z.string().trim().min(1, { message: 'Time is required' }),
  email: z.string().email(),
  notes: z.string().optional(),
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
            <div>
              <input
                type="text"
                placeholder="Name*"
                aria-label="Name"
                aria-invalid={errors.name ? 'true' : 'false'}
                className={styles.form_input}
                {...register('name')}
              />
              {errors.name?.message && (
                <p role="alert" className={styles.error}>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone*"
                aria-label="Phone"
                aria-invalid={errors.phone ? 'true' : 'false'}
                className={styles.form_input}
                {...register('phone')}
              />
              {errors.phone?.message && (
                <p role="alert" className={styles.error}>
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Seats*"
                aria-label="Seats"
                aria-invalid={errors.seats ? 'true' : 'false'}
                className={styles.form_input}
                {...register('seats')}
              />
              {errors.seats?.message && (
                <p role="alert" className={styles.error}>
                  {errors.seats.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="date"
                placeholder="dd.mm.yyyy"
                aria-label="Date"
                aria-invalid={errors.date ? 'true' : 'false'}
                className={styles.form_input}
                {...register('date')}
              />
              {errors.date?.message && (
                <p role="alert" className={styles.error}>
                  {errors.date.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Time"
                aria-label="Time"
                aria-invalid={errors.time ? 'true' : 'false'}
                className={styles.form_input}
                {...register('time')}
              />
              {errors.time?.message && (
                <p role="alert" className={styles.error}>
                  {errors.time.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Email*"
                aria-label="Email"
                aria-invalid={errors.email ? 'true' : 'false'}
                className={styles.form_input}
                {...register('email')}
              />
              {errors.email?.message && (
                <p role="alert" className={styles.error}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <textarea
            placeholder="Notes"
            aria-label="Notes"
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
