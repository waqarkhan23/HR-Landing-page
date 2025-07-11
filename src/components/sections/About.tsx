import { CheckCircle, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const features = [
    "Expertise in cutting-edge HR technologies",
    "Personalized solutions tailored to your business",
    "Proven track record of improving workforce performance",
    "Commitment to long-term client success",
  ];

  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We believe that every organization's success starts with its people.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "Our strategies are designed to deliver measurable business outcomes.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                About Us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At PetrolinX, we are committed to redefining human resource
                management by providing strategic, data-driven solutions that
                align with business goals. With years of experience in HR
                consulting, we help organizations optimize their workforce,
                enhance employee satisfaction, and implement best practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with HR strategies that drive growth,
                foster workplace culture, and ensure compliance with industry
                standards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
