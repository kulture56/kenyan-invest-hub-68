
import React from 'react';
import { OrbitIcon } from './LoginFormData';

export const iconsArray: OrbitIcon[] = [
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
