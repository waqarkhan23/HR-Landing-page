import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Retail Company",
      role: "Workforce Development",
      company: "Leading Retail Brand",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "We partnered with PetrolinX to optimize our workforce development. The targeted training programs boosted our team’s productivity and prepared our staff for new market demands.",
      rating: 5,
    },
    {
      name: "Tech Startup",
      role: "HR Automation",
      company: "InnovateNow",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "PetrolinX helped us streamline our HR processes. By automating routine tasks, we cut admin overhead by 40% and scaled our hiring smoothly as we grew.",
      rating: 5,
    },
    {
      name: "Healthcare Provider",
      role: "Employee Engagement",
      company: "Healthcare Plus",
      image:
        "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "With PetrolinX’s help, we improved employee engagement through in-depth surveys and practical steps. This led to higher retention and better overall morale.",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our HR consulting services have helped organizations
            enhance productivity, compliance, and employee satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-orange-300 mb-4" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-orange-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
