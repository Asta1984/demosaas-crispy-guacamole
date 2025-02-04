import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/routes';
import { AnimatePresence } from 'framer-motion';
import InfiniteGrid from "@/components/Grid";
import Spacetimefabric from "@/components/SquareBackground";
import Mazerunner from "@/components/Warp";
import Landing from "@/components/Landing";
import { Footer } from "@/components/ui/footer-section";
import { ThemeProvider } from './components/theme-provider.tsx'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatePresence mode='wait'>
          <div className="App">
            <Navbar />
            <AppRoutes />
            </div>            
        </AnimatePresence>
      </BrowserRouter> 
    </ThemeProvider>
    );
  }
  
export default App;