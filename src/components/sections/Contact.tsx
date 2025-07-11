import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@petrolinx.com",
      description: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Business District",
      description: "New York, NY 10001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM",
      description: "Weekend: By appointment",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Elevate Your HR Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to explore how our HR consulting services can
            transform your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-800 font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Schedule a Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Ready to transform your HR strategy? Our experts are here to help you take your 
                  organization to the next level. Book a free consultation today.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-full w-full"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card> */}
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Schedule a Free Consultation
              </CardTitle>
              <p className="text-gray-600">
                Fill out our contact form, and our HR experts will reach out to
                you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company Name"
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Phone Number"
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your HR needs..."
                    className="border-orange-200 focus:border-orange-500 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-full w-full"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
