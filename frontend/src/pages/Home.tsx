import { SearchBar } from "../components/SearchBar"
import { Navbar } from "../components/Navbar"

export default function Home() {
    return (
    <main className="mx-auto w-full  bg-ctp-base">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12">
          <img 
            src="/MadPaaToppenGrafitti.png" 
            alt="MadPaaToppen Grafitti" 
            className="mx-auto w-full max-w-md rounded-lg" 
          />
      </div>
      <SearchBar />
    </main>
  );
}