import { Link } from "react-router-dom";
import Sidebar from './components/Sidebar'
import './index.css';

export default function App() {
  return (
      <div class="flex border border-red-400">

        {/* Sidebar component */}
        <div class="hidden md:block flex-none items-center px-5 w-55 border border-red-300">
          <Sidebar/>
        </div> 

        {/* Main Content Area */}
        <div class="grow items-center justify-center p-40 border-4 border-dotted">
          <p class="text-center">Hello World</p>
        </div>

      </div>
  );
}