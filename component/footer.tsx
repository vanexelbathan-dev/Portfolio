import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vanexel.bathan@email.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg text-primary mb-1">Van Exel R. Bathan</h3>
            <p className="text-foreground/60 text-xs sm:text-sm">Junior Web Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-xs sm:text-sm">
              © {currentYear} Van Exel R. Bathan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
