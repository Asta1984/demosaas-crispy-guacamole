import { Link } from 'react-router-dom'; // Use React Router's Link
import { Button } from "@/components/ui/button";

import Footer from '@/components/Footer';


export default function Hero() {
  return (
  <>
    <section className="py-20 px-6 mb-20">
      <h1 className="text-4xl sm:text-6xl font-OnlinePrivileges mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-lime-500 mt-10">
        One for all
      </h1>
      <p className=" font-OnlinePrivileges text-2xl mb-16 max-w-2xl text-muted-foreground">
      Discover the power of technology and manufacturing with Sewantika.
      </p>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
        <Button variant={"secondary"} size={'lg'} className='text-white'>
          <Link to="/contact">Get Started</Link>
        </Button>
        <Button variant="destructive" size={'lg'}>
          <Link to="/features">Learn More</Link>
        </Button>
      </div>
    </section>
  
    <Footer/>
  </>
  );
}
