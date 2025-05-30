
import React, { useState, ChangeEvent, FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Ripple,
  AuthTabs,
  TechOrbitDisplay,
} from '@/components/ui/modern-animated-sign-in';

type FormData = {
  email: string;
  password: string;
};

interface OrbitIcon {
  component: () => ReactNode;
  className: string;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  reverse?: boolean;
}

const iconsArray: OrbitIcon[] = [
  {
    component: () => (
      <img
        width={40}
        height={40}
        src='/lovable-uploads/4bffdd8b-451b-4211-b64c-d3bf0c460d56.png'
        alt='Kenya Flag'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 20,
    delay: 20,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={35}
        height={35}
        src='/lovable-uploads/6a6c3356-ea41-4eb5-92d8-ba8cfe41d706.png'
        alt='Safaricom'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[35px] border-none bg-transparent',
    duration: 20,
    delay: 10,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={50}
        height={50}
        src='/lovable-uploads/2a92d424-974a-483d-87e0-62fe36d864f9.png'
        alt='KICC Building'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[50px] border-none bg-transparent',
    radius: 210,
    duration: 20,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={50}
        height={50}
        src='/lovable-uploads/1ffdf219-7b0e-463d-bb3d-e24e776c0069.png'
        alt='Nairobi Skyline'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[50px] border-none bg-transparent',
    radius: 210,
    duration: 20,
    delay: 20,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={35}
        height={35}
        src='/lovable-uploads/f6257fec-d804-49ae-ac19-299b1dbe7369.png'
        alt='Kenya Wildlife'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[35px] border-none bg-transparent',
    duration: 20,
    delay: 20,
    radius: 150,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <img
        width={35}
        height={35}
        src='/lovable-uploads/f791c29c-3f47-4bb0-9d3e-af2d1cebfe32.png'
        alt='Nairobi Night'
        className="rounded-md object-cover"
      />
    ),
    className: 'size-[35px] border-none bg-transparent',
    duration: 20,
    delay: 10,
    radius: 150,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <img
        width={45}
        height={45}
        src='/lovable-uploads/4bffdd8b-451b-4211-b64c-d3bf0c460d56.png'
        alt='Kenya'
        className="rounded-full object-cover"
      />
    ),
    className: 'size-[45px] border-none bg-transparent',
    radius: 270,
    duration: 20,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <img
        width={45}
        height={45}
        src='/lovable-uploads/2a92d424-974a-483d-87e0-62fe36d864f9.png'
        alt='Nairobi'
        className="rounded-full object-cover"
      />
    ),
    className: 'size-[45px] border-none bg-transparent',
    radius: 270,
    duration: 20,
    delay: 60,
    path: false,
    reverse: true,
  },
];

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const goToForgotPassword = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    console.log('Forgot password clicked');
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    const value = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted', formData);
    
    // Simulate login success and redirect to main platform
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const formFields = {
    header: 'Karibu Nyumbani',
    subHeader: 'Welcome back to Gelt - Your investment journey continues',
    fields: [
      {
        label: 'Email',
        required: true,
        type: 'email' as const,
        placeholder: 'Enter your email address',
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'email'),
      },
      {
        label: 'Password',
        required: true,
        type: 'password' as const,
        placeholder: 'Enter your password',
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'password'),
      },
    ],
    submitButton: 'Sign In',
    textVariantButton: 'Forgot password?',
  };

  return (
    <div className="min-h-screen bg-background">
      <section className='flex max-lg:justify-center'>
        {/* Left Side */}
        <span className='flex flex-col justify-center w-1/2 max-lg:hidden'>
          <Ripple mainCircleSize={100} />
          <TechOrbitDisplay iconsArray={iconsArray} text="Karibu" />
        </span>

        {/* Right Side */}
        <span className='w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%]'>
          <AuthTabs
            formFields={formFields}
            goTo={goToForgotPassword}
            handleSubmit={handleSubmit}
          />
        </span>
      </section>
    </div>
  );
};

export default LoginPage;
