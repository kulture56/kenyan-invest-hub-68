
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { FormData } from './LoginFormData';

export const createLoginHandlers = (
  navigate: NavigateFunction,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  const goToForgotPassword = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    console.log('Forgot password clicked');
  };

  const goToLandingPage = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    window.open('https://preview--geltlandingpage-05.lovable.app/', '_blank');
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
    console.log('Form submitted');
    
    // Simulate login success and redirect to main platform
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleLogout = () => {
    // Clear any stored auth data
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
    
    // Redirect to login page
    navigate('/login');
  };

  return {
    goToForgotPassword,
    goToLandingPage,
    handleInputChange,
    handleSubmit,
    handleLogout,
  };
};
