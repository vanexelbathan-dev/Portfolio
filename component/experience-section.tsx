import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'AMGC',
      period: 'OJT',
      description: 'Developed and improved web-based applications with focus on UI/UX enhancements and responsive design implementations.',
      responsibilities: [
        'Developed and improved web-based applications',
        'Fixed UI/UX issues and enhanced responsiveness',
        'Implemented frontend features using HTML, CSS, JavaScript',
        'Worked with backend systems using PHP and MySQL',
        'Assisted in mobile app development using Flutter',
        'Collaborated with team members on project requirements',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Flutter'],
    },
    {
      title: 'IT Support Intern',
      company: 'AMGC',
      period: 'OJT',
      description: 'Provided technical support and maintained system infrastructure to ensure smooth operations across the organization.',
      responsibilities: [
        'Performed file encoding and data organization',
        'Conducted basic troubleshooting and PC maintenance',
        'Assisted in LAN cabling and network setup',
        'Provided technical support to end users',
        'Maintained documentation of IT issues and solutions',
        'Ensured smooth system operations and network connectivity',
      ],
      skills: ['Troubleshooting', 'PC Maintenance', 'LAN Cabling', 'Network Setup', 'File Encoding'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Experience</h2>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="border border-border hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-primary text-sm sm:text-base mt-1">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm">Key Responsibilities:</h4>
                  <ul className="grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70 text-xs sm:text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs sm:text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
