import Navbar from "./Navbar"; // dusri file se navbar ka sab kuch idhr use krna ho toh
import Footer from "./Footer"; // dusri file se footer ke sab kuch idhr use krna ho toh

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout // agr koi hor file mei iss layout ka sab kuch use krna ho