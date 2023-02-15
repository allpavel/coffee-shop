import { PropsWithChildren } from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
