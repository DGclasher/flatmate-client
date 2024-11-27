import { Button } from "@/components/ui/button";
import { ChevronRight, UserCheck, ShieldCheck, CheckCircle2,  } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";


export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section
        className="relative flex flex-col w-full h-full font-poppins items-center justify-center pt-40 pb-40 bg-gradient-to-b from-zinc-950  to-zinc-800 text-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        }}
      >
        <p className="p-2 rounded-full bg-zinc-600 text-zinc-300 text-xs">
          Apartment hunting is now easy
        </p>
        <h1 className="text-5xl font-bold font-poppins pb-8 pt-2">
          Welcome to FlatMate
        </h1>
        <p className="font-poppins">
          FlatMate is a platform that helps you find your perfect flatmate.
        </p>

        <div className="flex gap-4">
          <Button className="mt-8 bg-zinc-950">Get Started</Button>
          <Button className="mt-8" variant="secondary">
            Learn More
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-8 py-16 font-poppins">
        <h2 className="text-4xl font-bold text-center pb-12">
          Why Choose FlatMate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <UserCheck className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold pb-4">
              Customized Recommendations
            </h3>
            <p className="text-zinc-600">
              Find flatmates based on your preferences using advanced machine
              learning algorithms tailored just for you.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold pb-4">Secure</h3>
            <p className="text-zinc-600">
              Your data and personal details are encrypted and handled with the
              utmost care to ensure safety.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold pb-4">Reliable</h3>
            <p className="text-zinc-600">
              Trusted by thousands of users to help them find their perfect
              flatmate with ease and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full border-t rounded-t-3xl bg-gradient-to-b from-zinc-100  to-zinc-200 font-poppins py-12 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold  pb-4">About FlatMate</h3>
            <p>
              FlatMate is your go-to platform for finding compatible flatmates
              based on your preferences. Simplify your search and enjoy a secure
              experience with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold  pb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold  pb-4">Follow Us</h3>
            <div className="flex gap-4">
             <div>
              <FaLinkedin className="w-6 h-6" />

             </div>
              <div>
                <FiTwitter className="w-6 h-6" />
              </div>
              <div>
                <AiFillInstagram className="w-6 h-6" />
                </div>

              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
