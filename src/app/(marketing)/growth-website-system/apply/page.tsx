import Link from "next/link";
import Image from "next/image";
import GradientIcon from "@/components/GradientIcon";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ApplyPage() {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Bar */}
      <header className="py-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/clyra_logo.png"
              alt="Clyra Studios"
              width={200}
              height={70}
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
      {/* Header with Back Button */}
      <div className="bg-black border-b border-gray-800 py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link 
              href="/growth-website-system"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <GradientIcon icon={faArrowLeft} size="sm" className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span className="font-medium">Back to Growth Website System</span>
            </Link>
            
            <div className="text-sm text-gray-400">
              Secure Application
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Tally Form */}
      <div className="flex-grow relative">
        <iframe 
          src="https://tally.so/r/nG8zx2?transparentBackground=1" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Growth Website System Application"
          className="absolute inset-0 border-0"
          style={{ minHeight: 'calc(100vh - 80px)' }}
          loading="eager"
        />
      </div>
      </main>
    </div>
  );
}
