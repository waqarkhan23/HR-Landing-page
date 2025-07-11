import { 
  Settings, 
  TrendingUp, 
  Users, 
  Target, 
  FileText, 
  MessageSquare, 
  DollarSign, 
  BarChart3, 
  Search 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Full-scale HCM Implementation',
      description: 'End-to-end Human Capital Management solutions, integrating HR technology that streamlines payroll, talent management, and compliance tracking.',
      features: ['HR software selection', 'Employee self-service portals', 'Cloud-based HR solutions'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: TrendingUp,
      title: 'HR Project Management',
      description: 'Strategic HR initiatives delivered successfully through comprehensive planning, management, and execution of HR transformation projects.',
      features: ['HR process improvement', 'Workforce analytics', 'Change management consulting'],
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: Users,
      title: 'Workforce Development',
      description: 'Employee development programs that cultivate talent, improve performance, and prepare leaders for future challenges.',
      features: ['Training workshops', 'Leadership coaching', 'Career development frameworks'],
      color: 'from-orange-400 to-yellow-400'
    },
    {
      icon: Target,
      title: 'Strategic HR Leadership',
      description: 'HR leadership consulting that aligns HR initiatives with organizational objectives, ensuring sustainable growth and efficiency.',
      features: ['HR policy development', 'Organizational optimization', 'Leadership alignment'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FileText,
      title: 'Employee Handbook Development',
      description: 'Customized employee handbooks that outline company policies, legal requirements, and workplace expectations.',
      features: ['Custom handbook creation', 'Legal compliance', 'Regular updates'],
      color: 'from-orange-500 to-yellow-400'
    },
    {
      icon: MessageSquare,
      title: 'Engagement Surveys',
      description: 'Employee engagement surveys to measure job satisfaction and uncover areas for improvement, enhancing retention and morale.',
      features: ['Customized surveys', 'Data analysis', 'Actionable recommendations'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Compensation Planning',
      description: 'Competitive compensation and benefits packages that attract and retain top talent through strategic planning.',
      features: ['Salary benchmarking', 'Incentive program design', 'Benefits structuring'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Management',
      description: 'Performance management systems that align employee goals with business objectives, fostering continuous improvement.',
      features: ['360-degree evaluations', 'KPI tracking', 'Appraisal frameworks'],
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Search,
      title: 'Talent Acquisition',
      description: 'End-to-end recruitment solutions to help businesses attract, hire, and retain skilled professionals.',
      features: ['Recruitment optimization', 'Employer branding', 'Onboarding support'],
      color: 'from-orange-500 to-yellow-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive HR Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From HCM implementation to talent acquisition, we provide end-to-end HR services 
            that transform your workforce and drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;