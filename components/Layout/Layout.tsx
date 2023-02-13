import { PropsWithChildren } from 'react';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
