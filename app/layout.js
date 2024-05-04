
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './globals.css'



export const metadata = {
  title: "Sarah Ismail Agency",
  description: "Author Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
