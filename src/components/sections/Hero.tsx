import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Workplaces with
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Expert HR Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamlining HR operations, driving employee engagement, and
                building high-performing teams through strategic consulting and
                innovative solutions.
              </p>
              <p>
                Welcome to Petrolinx, your trusted HR consulting partner. We
                specialize in delivering tailored HR solutions that enhance
                workforce efficiency, ensure compliance, and promote a thriving
                workplace culture. Whether you need a complete HR transformation
                or targeted support, our expert team is here to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="HR Consulting Team"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
