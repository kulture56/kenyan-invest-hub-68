
import { memo, ReactNode, ChangeEvent, FormEvent } from 'react';
import { AnimatedForm } from './animated-form';

type FieldType = 'text' | 'email' | 'password';

interface AuthTabsProps {
  formFields: {
    header: string | ReactNode;
    subHeader?: string | ReactNode;
    fields: Array<{
      label: string;
      required?: boolean;
      type: FieldType;
      placeholder: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }>;
    submitButton: string;
    textVariantButton?: string;
    appleLogin?: string;
    googleLogin?: string;
    signUpPrompt?: string;
  };
  goTo: (event: React.MouseEvent<HTMLButtonElement>) => void;
  goToLandingPage?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthTabs = memo(function AuthTabs({
  formFields,
  goTo,
  goToLandingPage,
  handleSubmit,
}: AuthTabsProps) {
  return (
    <div className='flex max-lg:justify-center w-full md:w-auto'>
      <div className='w-full lg:w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:px-[10%]'>
        <AnimatedForm
          {...formFields}
          fieldPerRow={1}
          onSubmit={handleSubmit}
          goTo={goTo}
          goToLandingPage={goToLandingPage}
        />
      </div>
    </div>
  );
});

export { AuthTabs };
