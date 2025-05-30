import React from 'react';
import { ChangeEvent } from 'react';
import { Typewriter } from '@/components/ui/typewriter';
export const createFormFields = (handleInputChange: (event: ChangeEvent<HTMLInputElement>, name: 'email' | 'password') => void) => ({
  header: <div className="flex items-center gap-2">
      <span className="text-neutral-950">Karibu Nyumbani</span>
      <img src="/lovable-uploads/fdcbabe4-bcae-41ba-af33-b425873da4b4.png" alt="Kenya Flag" className="w-8 h-6 object-cover rounded-sm" />
    </div>,
  subHeader: <div className="text-sm mb-2">
      <span className="text-neutral-600 dark:text-neutral-300">Your investment Safari to </span>
      <Typewriter text={["financial freedom", "wealth building", "smart investing", "a better future"]} speed={70} className="text-purple-400" waitTime={1500} deleteSpeed={40} cursorChar={"_"} />
    </div>,
  fields: [{
    label: 'Email',
    required: true,
    type: 'email' as const,
    placeholder: 'Enter your email address',
    onChange: (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'email')
  }, {
    label: 'Password',
    required: true,
    type: 'password' as const,
    placeholder: 'Enter your password',
    onChange: (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'password')
  }],
  submitButton: 'Sign In',
  textVariantButton: 'Forgot password?',
  appleLogin: 'Login with Apple',
  googleLogin: 'Login with Google',
  signUpPrompt: "Don't have an account yet? Sign up"
});