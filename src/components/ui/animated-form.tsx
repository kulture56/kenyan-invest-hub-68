'use client';

import React from 'react';
import { memo, ReactNode, useState, ChangeEvent, FormEvent } from 'react';
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
  goToLandingPage
}: AnimatedFormProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  
  const toggleVisibility = () => setVisible(!visible);
  
  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const currentErrors: Errors = {};
    fields.forEach(field => {
      const value = (event.target as HTMLFormElement)[field.label]?.value;
      if (field.required && !value) {
        currentErrors[field.label] = `${field.label} is required`;
      }
      if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
        currentErrors[field.label] = 'Invalid email address';
      }
      if (field.type === 'password' && value && value.length < 6) {
        currentErrors[field.label] = 'Password must be at least 6 characters long';
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
    <section className="max-md:w-full flex flex-col gap-3 w-96 mx-auto bg-gradient-to-br from-purple-50 to-white dark:from-[#1a1632] dark:to-[#0e0b18] rounded-2xl p-8 shadow-2xl border border-primary/10 transition-colors">
      <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
        <h2 className='font-bold text-3xl text-primary mb-1 whitespace-nowrap flex items-center gap-3'>
          {/* Make header icons/flags larger and more vibrant */}
          <span className="flex items-center gap-2">
            {typeof header === "object" ? (
              // If the header is a JSX that contains an image, style the image
              <span className="flex gap-2 items-center">
                {React.Children.map(header, child =>
                  typeof child === "object" && (child as any)?.type === "img" ? (
                    React.cloneElement(child as any, {
                      className: "w-10 h-8 object-cover rounded shadow-lg border-2 border-primary",
                      style: { boxShadow: "0 2px 12px 0 rgba(116,70,198,0.2)" }
                    })
                  ) : child
                )}
              </span>
            ) : header}
          </span>
        </h2>
      </BoxReveal>

      {subHeader && (
        <BoxReveal boxColor='var(--skeleton)' duration={0.3} className='pb-2'>
          <div className='text-gray-700 dark:text-gray-200 text-base max-w-sm font-medium'>
            {subHeader}
          </div>
        </BoxReveal>
      )}

      {/* Social Login Buttons */}
      {(appleLogin || googleLogin) && (
        <div className="space-y-2">
          {appleLogin && (
            <BoxReveal boxColor='var(--skeleton)' duration={0.3} overflow='visible' width='unset'>
              <button 
                type='button' 
                onClick={() => console.log('Apple login clicked')} 
                className="g-button group/btn bg-white dark:bg-neutral-950 w-full rounded-lg border border-gray-300 dark:border-neutral-800 h-12 font-semibold flex items-center justify-center gap-4 text-neutral-900 dark:text-white text-base shadow-md hover:bg-gray-100 dark:hover:bg-neutral-900 transition"
                aria-label="Sign in with Apple"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {appleLogin}
                <BottomGradient />
              </button>
            </BoxReveal>
          )}
          {googleLogin && (
            <BoxReveal boxColor='var(--skeleton)' duration={0.3} overflow='visible' width='unset'>
              <button 
                className='g-button group/btn bg-white dark:bg-neutral-950 w-full rounded-lg border border-gray-300 dark:border-neutral-800 h-12 font-semibold flex items-center justify-center gap-4 text-neutral-900 dark:text-white text-base shadow-md hover:bg-gray-100 dark:hover:bg-neutral-900 transition'
                type='button'
                onClick={() => console.log('Google login clicked')}
                aria-label="Sign in with Google"
              >
                <span className="flex items-center justify-center gap-4 w-full h-full">
                  <img src="/lovable-uploads/789c9d61-2d9e-4a99-87d1-248bdd20ccd0.png" width={24} height={24} alt='Google Icon' className="rounded-sm"/>
                  {googleLogin}
                </span>
                <BottomGradient />
              </button>
            </BoxReveal>
          )}
          <BoxReveal boxColor='var(--skeleton)' duration={0.3} width='100%'>
            <section className='flex items-center gap-4 my-3'>
              <hr className='flex-1 border-1 border-dashed border-gray-300 dark:border-neutral-700' />
              <p className="text-sm text-gray-600 dark:text-gray-300">or</p>
              <hr className='flex-1 border-1 border-dashed border-gray-300 dark:border-neutral-700' />
            </section>
          </BoxReveal>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <section className={`grid grid-cols-1 md:grid-cols-${fieldPerRow} gap-3`}>
          {fields.map(field => (
            <section key={field.label} className='flex flex-col gap-1'>
              <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
                <Label htmlFor={field.label} className="text-gray-900 dark:text-white font-semibold text-sm">
                  {field.label} <span className='text-red-500'>*</span>
                </Label>
              </BoxReveal>

              <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3} className='flex flex-col space-y-1 w-full'>
                <section className='relative'>
                  <Input 
                    type={field.type === 'password' ? (visible ? 'text' : 'password') : field.type} 
                    id={field.label} 
                    placeholder={field.placeholder} 
                    onChange={field.onChange} 
                    className="bg-white dark:bg-neutral-900 text-black dark:text-white border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-purple-500 h-12 text-base font-medium" 
                  />

                  {field.type === 'password' && (
                    <button 
                      type='button' 
                      onClick={toggleVisibility} 
                      className='absolute inset-y-0 right-3 flex items-center text-xl leading-5 text-gray-500 dark:text-gray-300 hover:text-primary'
                    >
                      {visible ? <Eye className='h-5 w-5' /> : <EyeOff className='h-5 w-5' />}
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
          {errorField && <p className='text-red-500 text-sm mb-3'>{errorField}</p>}
        </BoxReveal>

        <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3} overflow='visible'>
          <button 
            type='submit' 
            className="bg-primary hover:bg-primary/90 transition group/btn block w-full rounded-lg h-12 font-bold shadow-lg outline-hidden text-primary-foreground text-base mt-3"
          >
            {submitButton} &rarr;
            <BottomGradient />
          </button>
        </BoxReveal>

        {textVariantButton && goTo && (
          <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
            <section className='mt-3 text-center hover:cursor-pointer'>
              <button onClick={goTo} className="text-sm hover:cursor-pointer outline-hidden text-purple-600 hover:text-purple-700 font-medium">
                {textVariantButton}
              </button>
            </section>
          </BoxReveal>
        )}

        {signUpPrompt && goToLandingPage && (
          <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
            <section className='mt-3 text-center hover:cursor-pointer'>
              <button onClick={goToLandingPage} className="text-base font-semibold underline text-purple-700 hover:text-purple-900">
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
