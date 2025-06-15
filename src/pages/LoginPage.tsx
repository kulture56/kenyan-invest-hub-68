import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthTabs, TechOrbitDisplay } from '@/components/ui/modern-animated-sign-in';
import ParticleTypography from '@/components/ui/interactive-particle-typography-1';
import { FormData } from '@/components/login/LoginFormData';
import { iconsArray } from '@/components/login/OrbitIcons';
import { createFormFields } from '@/components/login/LoginFormFields';
import { createLoginHandlers } from '@/components/login/LoginHandlers';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const {
    goToForgotPassword,
    goToLandingPage,
    handleInputChange,
    handleSubmit,
  } = createLoginHandlers(navigate, setFormData);

  const formFields = createFormFields(handleInputChange);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f2fc] via-[#ece1f9] to-[#eae9ed] dark:from-black dark:via-background dark:to-[#232144] transition">
      <section className='flex max-lg:justify-center'>
        {/* Left Side - Interactive Particle Typography */}
        <span className='flex flex-col justify-center w-1/2 max-lg:hidden relative'>
          <div className="absolute inset-0 z-10">
            <ParticleTypography />
          </div>
        </span>
        {/* Right Side - White background + center vertically and horizontally */}
        <span className='w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%]'>
          <div className="flex flex-1 justify-center items-center w-full">
            <AuthTabs
              formFields={formFields}
              goTo={goToForgotPassword}
              goToLandingPage={goToLandingPage}
              handleSubmit={handleSubmit}
            />
          </div>
        </span>
      </section>
    </div>
  );
};

export default LoginPage;
