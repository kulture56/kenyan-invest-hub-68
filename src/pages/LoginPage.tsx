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
    password: ''
  });
  const {
    goToForgotPassword,
    goToLandingPage,
    handleInputChange,
    handleSubmit
  } = createLoginHandlers(navigate, setFormData);
  const formFields = createFormFields(handleInputChange);
  return <div className="min-h-screen bg-background">
      <section className='flex max-lg:justify-center'>
        {/* Left Side - Interactive Particle Typography */}
        <span className='flex flex-col justify-center w-1/2 max-lg:hidden relative'>
          <div className="absolute inset-0 z-10">
            <ParticleTypography />
          </div>
        </span>

        {/* Right Side - White background */}
        <span className="w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%] bg-white text-slate-50">
          <AuthTabs formFields={formFields} goTo={goToForgotPassword} goToLandingPage={goToLandingPage} handleSubmit={handleSubmit} />
        </span>
      </section>
    </div>;
};
export default LoginPage;