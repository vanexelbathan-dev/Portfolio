import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Web-Based Calamity Monitoring and Incident Reporting System',
      type: 'Capstone Project',
      role: 'Full-stack Developer',
      description: 'A comprehensive system that uses GIS, GPS, and SMS notifications to monitor disasters and report incidents in real-time, enabling faster emergency response.',
      features: [
        'Real-time incident reporting and mapping',
        'GIS-based disaster tracking',
        'SMS notification system',
        'User management and authentication',
        'Admin dashboard for monitoring',
        'Mobile-responsive interface',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'GIS', 'GPS'],
      learned: 'Learned full-stack development, GIS integration, real-time data handling, and the importance of user-centric design in critical systems.',
    },
    {
      title: 'Student Information System',
      type: 'Academic Project',
      role: 'Full-stack Developer',
      description: 'A comprehensive system for managing student records, enrollment, grades, and academic progress with role-based access control.',
      features: [
        'Student record management',
        'Course enrollment system',
        'Grade tracking and reporting',
        'User authentication and roles',
        'Data export functionality',
        'Dashboard analytics',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      learned: 'Developed proficiency in database design, user authentication, data validation, and creating intuitive admin interfaces.',
    },
    {
      title: 'CRUD Management System',
      type: 'Academic Project',
      role: 'Full-stack Developer',
      description: 'A full-featured application demonstrating Create, Read, Update, and Delete operations with a clean, user-friendly interface.',
      features: [
        'Complete CRUD functionality',
        'Data validation and error handling',
        'Search and filter capabilities',
        'Responsive design',
        'User-friendly interface',
        'Data persistence with database',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      learned: 'Mastered fundamental web development concepts, database operations, and best practices in form handling and data management.',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Projects</h2>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-primary/50 text-primary text-xs sm:text-sm">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-2">
                      Role: <span className="text-primary">{project.role}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{project.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/70 text-xs sm:text-sm">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">What I Learned</h4>
                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{project.learned}</p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2 sm:pt-4">
                      <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">View Code</span>
                        <span className="sm:hidden">Code</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
