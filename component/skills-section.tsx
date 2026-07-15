import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Database,
  Smartphone,
  Wrench,
  GitBranch,
  Monitor,
} from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Implementation'],
    },
    {
      title: 'Backend Development',
      icon: Code2,
      skills: ['PHP', 'MySQL', 'Database Design', 'Server-side Logic', 'API Development'],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'Cross-platform Development', 'Mobile UI Design'],
    },
    {
      title: 'IT Support',
      icon: Wrench,
      skills: ['Troubleshooting', 'PC Maintenance', 'LAN Cabling', 'Network Setup', 'File Encoding'],
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: ['Git', 'VS Code', 'GitHub', 'Command Line', 'Version Control'],
    },
    {
      title: 'Soft Skills',
      icon: Database,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Quick Learner'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Skills & Expertise</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
