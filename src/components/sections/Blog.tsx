import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Emerging HR technologies",
      excerpt:
        "Explore how AI, automation, and analytics are transforming human resource management and what it means for your organization.",
      image:
        "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "HR Technology",
      date: "December 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
    },
    {
      title: "Best practices in talent management",
      excerpt:
        "Learn the essential strategies for creating a workplace culture that drives engagement, productivity, and business success.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Talent Management",
      date: "December 10, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
    },
    {
      title: "Employee engagement strategies",
      excerpt:
        "Discover proven strategies for maintaining high levels of employee engagement in remote and hybrid work environments.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Employee Engagement",
      date: "December 5, 2024",
      author: "Lisa Rodriguez",
      readTime: "6 min read",
    },
  ];

  // const categories = [
  //   "HR Technology",
  //   "Employee Engagement",
  //   "Talent Management",
  //   "Performance Management",
  //   "Compliance",
  //   "Leadership Development",
  // ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
            Blog & Insights
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Industry Insights & HR Best Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest HR trends, workplace strategies, and
            compliance updates through our expert-led blog.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 h-auto"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50 cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div> */}

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-full"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
