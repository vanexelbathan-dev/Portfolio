'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show submission feedback
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vanexel.bathan@email.com',
      href: 'mailto:vanexel.bathan@email.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/vanexelbathan',
      href: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vanexelbathan',
      href: 'https://linkedin.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 9XX XXX XXXX',
      href: 'tel:+639XXXXXXXXX',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                I&apos;m always interested in hearing about new opportunities and connecting with fellow developers. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-foreground/60">{link.label}</p>
                      <p className="text-foreground font-medium text-xs sm:text-sm truncate">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Send Me a Message</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
