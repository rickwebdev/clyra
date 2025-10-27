import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import GradientIcon from "@/components/GradientIcon";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SchedulePage() {

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
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
                Schedule Strategy Call
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Calendly Widget */}
        <div className="flex-grow relative">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/rickthewebdev/30min" 
            style={{ minWidth: '320px', height: 'calc(100vh - 140px)' }}
          />
        </div>
      </main>
    </div>
    </>
  );
}
