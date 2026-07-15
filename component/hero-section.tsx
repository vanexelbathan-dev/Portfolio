'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Van Exel R. Bathan
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-semibold">
              Junior Web Developer
            </h2>
          </div>

          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
            I build responsive and user-friendly web applications with modern technologies. Fresh graduate with hands-on OJT experience in both web development and IT support.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
            <Button
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              size="lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/profile.jpg"
              alt="Van Exel R. Bathan"
              fill
              className="object-cover rounded-2xl shadow-2xl relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
