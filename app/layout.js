import PageTransition from "@/components/PageTransition";
import './globals.css'
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Starbarks',
  description: 'A single one page landing site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans  bg-gradient-to-b overflow from-amber-50 to-amber-100 text-gray-800">
        <div className="">
          <PageTransition>
            <Navbar/>
            {children}
            <Footer/>
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
