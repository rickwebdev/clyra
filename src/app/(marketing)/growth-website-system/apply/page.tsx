import Link from "next/link";
import Image from "next/image";
import GradientIcon from "@/components/GradientIcon";
import GrowthApplicationForm from "@/components/GrowthApplicationForm";
import { faArrowLeft, faRocket, faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

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

        {/* Hero Section */}
        <section className="hero-section py-16">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="hero-title mb-6">
                Apply for the 
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  {" "}Growth Website System
                </span>
              </h1>
              <p className="hero-subtitle text-xl text-gray-300 mb-8">
                Tell us about your business and goals. We'll review your application and get back to you within 24 hours.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-2 text-gray-400">
                  <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <GradientIcon icon={faUsers} size="sm" className="primary" />
                  <span className="text-sm">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <GradientIcon icon={faRocket} size="sm" className="accent" />
                  <span className="text-sm">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container">
            <GrowthApplicationForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About the Process?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Reach out if you have any questions about the Growth Website System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn btn-outline-white btn-lg"
              >
                <GradientIcon icon={faUsers} size="sm" className="white" />
                Contact Us
              </Link>
              <Link 
                href="/strategy-call" 
                className="btn btn-white btn-lg"
              >
                <GradientIcon icon={faRocket} size="sm" className="primary" />
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
