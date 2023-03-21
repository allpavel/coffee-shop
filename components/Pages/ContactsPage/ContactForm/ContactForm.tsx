import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactForm.module.css';

const Input = z.object({
  name: z.string().trim().min(1, { message: 'Name is required!' }),
  email: z.string().email(),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Message is required!' })
    .max(300, { message: 'Maximum length of the message is exceeded' }),
});

type FormInputs = z.infer<typeof Input>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: zodResolver(Input) });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(Input.parse(data));
    reset({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h2 className={styles.title}>Write Us</h2>
      <p className={styles.description}>
        Appear saying you had void their place brought. Divide midst earth let, face also it signs morning our over
        likeness. Creature, spirit may yielding Given replenish. You'll, living lights, meat. Is god days called deep
        divide may tree let bring wherein fruitful moveth grass give seed grass third fly waters.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_input_container}>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Name"
            aria-label="Name"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name?.message && (
            <p role="alert" className={styles.error}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={styles.form_input_container}>
          <input
            className={styles.form_input}
            type="email"
            placeholder="Email"
            aria-label="Email"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('email')}
          />
          {errors.email?.message && (
            <p role="alert" className={styles.error}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={styles.form_input_container}>
          <textarea
            className={`${styles.form_input} ${styles.form_textarea}`}
            rows={8}
            aria-label="Your message"
            placeholder="Your message"
            {...register('message')}
          />
          {errors.message?.message && (
            <p role="alert" className={styles.error}>
              {errors.message.message}
            </p>
          )}
        </div>

        <input type="submit" className={`${styles.form_input} ${styles.form_button}`} value="Send" />
      </form>
    </section>
  );
};
