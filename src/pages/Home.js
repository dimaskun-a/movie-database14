// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home() {
  return (
    <>
      <Hero />
      <Movies title="Latest Movies" />
    </>
  );
}

export default Home;
