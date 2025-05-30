
'use client';
import {
  memo,
  ReactNode,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { BoxReveal } from './box-reveal';
import { Input } from './input-animated';
import { Label } from './label-animated';
import { BottomGradient } from './bottom-gradient';

type FieldType = 'text' | 'email' | 'password';

type Field = {
  label: string;
  required?: boolean;
  type: FieldType;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type AnimatedFormProps = {
  header: string | ReactNode;
  subHeader?: string | ReactNode;
  fields: Field[];
  submitButton: string;
  textVariantButton?: string;
  errorField?: string;
  fieldPerRow?: number;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  appleLogin?: string;
  googleLogin?: string;
  signUpPrompt?: string;
  goTo?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  goToLandingPage?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Errors = {
  [key: string]: string;
};

const AnimatedForm = memo(function AnimatedForm({
  header,
  subHeader,
  fields,
  submitButton,
  textVariantButton,
  errorField,
  fieldPerRow = 1,
  onSubmit,
  appleLogin,
  googleLogin,
  signUpPrompt,
  goTo,
  goToLandingPage,
}: AnimatedFormProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const toggleVisibility = () => setVisible(!visible);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const currentErrors: Errors = {};
    fields.forEach((field) => {
      const value = (event.target as HTMLFormElement)[field.label]?.value;

      if (field.required && !value) {
        currentErrors[field.label] = `${field.label} is required`;
      }

      if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
        currentErrors[field.label] = 'Invalid email address';
      }

      if (field.type === 'password' && value && value.length < 6) {
        currentErrors[field.label] =
          'Password must be at least 6 characters long';
      }
    });
    return currentErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm(event);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(event);
      console.log('Form submitted');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className='max-md:w-full flex flex-col gap-4 w-96 mx-auto'>
      <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
        <h2 className='font-bold text-3xl text-neutral-800 dark:text-neutral-200'>
          {header}
        </h2>
      </BoxReveal>

      {subHeader && (
        <BoxReveal boxColor='var(--skeleton)' duration={0.3} className='pb-2'>
          <div className='text-neutral-600 text-sm max-w-sm dark:text-neutral-300'>
            {subHeader}
          </div>
        </BoxReveal>
      )}

      {/* Social Login Buttons */}
      {(appleLogin || googleLogin) && (
        <div className="space-y-3">
          {appleLogin && (
            <BoxReveal
              boxColor='var(--skeleton)'
              duration={0.3}
              overflow='visible'
              width='unset'
            >
              <button
                className='g-button group/btn bg-transparent w-full rounded-md border h-10 font-medium outline-hidden hover:cursor-pointer flex items-center justify-center gap-3'
                type='button'
                onClick={() => console.log('Apple login clicked')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {appleLogin}
                <BottomGradient />
              </button>
            </BoxReveal>
          )}

          {googleLogin && (
            <BoxReveal
              boxColor='var(--skeleton)'
              duration={0.3}
              overflow='visible'
              width='unset'
            >
              <button
                className='g-button group/btn bg-transparent w-full rounded-md border h-10 font-medium outline-hidden hover:cursor-pointer'
                type='button'
                onClick={() => console.log('Google login clicked')}
              >
                <span className='flex items-center justify-center w-full h-full gap-3'>
                  <img
                    src="/lovable-uploads/789c9d61-2d9e-4a99-87d1-248bdd20ccd0.png"
                    width={20}
                    height={20}
                    alt='Google Icon'
                  />
                  {googleLogin}
                </span>
                <BottomGradient />
              </button>
            </BoxReveal>
          )}

          <BoxReveal boxColor='var(--skeleton)' duration={0.3} width='100%'>
            <section className='flex items-center gap-4'>
              <hr className='flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700' />
              <p className='text-neutral-700 text-sm dark:text-neutral-300'>
                or
              </p>
              <hr className='flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700' />
            </section>
          </BoxReveal>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <section
          className={`grid grid-cols-1 md:grid-cols-${fieldPerRow} mb-4`}
        >
          {fields.map((field) => (
            <section key={field.label} className='flex flex-col gap-2'>
              <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
                <Label htmlFor={field.label}>
                  {field.label} <span className='text-red-500'>*</span>
                </Label>
              </BoxReveal>

              <BoxReveal
                width='100%'
                boxColor='var(--skeleton)'
                duration={0.3}
                className='flex flex-col space-y-2 w-full'
              >
                <section className='relative'>
                  <Input
                    type={
                      field.type === 'password'
                        ? visible
                          ? 'text'
                          : 'password'
                        : field.type
                    }
                    id={field.label}
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                  />

                  {field.type === 'password' && (
                    <button
                      type='button'
                      onClick={toggleVisibility}
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                    >
                      {visible ? (
                        <Eye className='h-5 w-5' />
                      ) : (
                        <EyeOff className='h-5 w-5' />
                      )}
                    </button>
                  )}
                </section>

                <section className='h-4'>
                  {errors[field.label] && (
                    <p className='text-red-500 text-xs'>
                      {errors[field.label]}
                    </p>
                  )}
                </section>
              </BoxReveal>
            </section>
          ))}
        </section>

        <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3}>
          {errorField && (
            <p className='text-red-500 text-sm mb-4'>{errorField}</p>
          )}
        </BoxReveal>

        <BoxReveal
          width='100%'
          boxColor='var(--skeleton)'
          duration={0.3}
          overflow='visible'
        >
          <button
            className='bg-gradient-to-br relative group/btn from-zinc-200 dark:from-zinc-900
            dark:to-zinc-900 to-zinc-200 block dark:bg-zinc-800 w-full text-black
            dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
              dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] outline-hidden hover:cursor-pointer'
            type='submit'
          >
            {submitButton} &rarr;
            <BottomGradient />
          </button>
        </BoxReveal>

        {textVariantButton && goTo && (
          <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
            <section className='mt-4 text-center hover:cursor-pointer'>
              <button
                className='text-sm text-blue-500 hover:cursor-pointer outline-hidden'
                onClick={goTo}
              >
                {textVariantButton}
              </button>
            </section>
          </BoxReveal>
        )}

        {signUpPrompt && goToLandingPage && (
          <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
            <section className='mt-4 text-center hover:cursor-pointer'>
              <button
                className='text-sm text-purple-500 hover:cursor-pointer outline-hidden hover:underline'
                onClick={goToLandingPage}
              >
                {signUpPrompt}
              </button>
            </section>
          </BoxReveal>
        )}
      </form>
    </section>
  );
});

export { AnimatedForm };
