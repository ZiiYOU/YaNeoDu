import { PropsWithChildren } from "react";
import Footer from "./_components/Footer";
import Header from './_components/Header';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root" className="min-h-[100vh] pt-16 pb-40 relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
