'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ClientOnly } from '@/components/client-only';

const benefits = [
  'Experience our teaching methodology firsthand',
  'Understand the course structure and study material',
  'Get your doubts cleared by expert faculty',
  'Receive a personalized study plan recommendation',
  'No obligation to enroll after the demo',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  class: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  class?: string;
}

export default function DemoSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    course: '',
    class: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.class) newErrors.class = 'Please select a class';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: 'Demo Booked Successfully!',
        description: 'Our team will contact you shortly to schedule your free demo session.',
      });
      setFormData({ name: '', phone: '', email: '', course: '', class: '' });
      setErrors({});
    }
  };

  return (
    <section id="demo" className="py-10 sm:py-14 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-arastu-dark to-arastu-dark/95 text-white overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-arastu-green" />
              <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Book a <span className="text-arastu-orange">FREE</span> Demo Session
                </h2>
                <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                  Experience our world-class coaching before making a decision. Our free
                  demo class will give you a clear picture of our teaching methodology,
                  study material quality, and expert guidance.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-arastu-orange">
                    What you get in the demo:
                  </h3>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="size-5 text-arastu-green shrink-0" />
                      <span className="text-sm sm:text-base text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <ArrowRight className="size-5 text-arastu-orange" />
                  <p className="text-sm text-gray-300">
                    <span className="text-white font-semibold">1000+ students</span> have
                    joined after attending our free demo
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-gray-100 shadow-lg">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-arastu-dark mb-6">
                  Fill in your details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="demo-name" className="text-sm text-arastu-dark font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <div className="mobile-input">
                      <Input
                        id="demo-name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={errors.name ? 'border-red-500' : ''}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="demo-phone" className="text-sm text-arastu-dark font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="mobile-input">
                      <Input
                        id="demo-phone"
                        type="tel"
                        placeholder="Enter 10-digit phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="demo-email" className="text-sm text-arastu-dark font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="mobile-input">
                      <Input
                        id="demo-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={errors.email ? 'border-red-500' : ''}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Course Select */}
                  <div className="space-y-2">
                    <Label className="text-sm text-arastu-dark font-medium">
                      Select Course <span className="text-red-500">*</span>
                    </Label>
                    <div className="mobile-input">
                      <ClientOnly
                        fallback={
                          <div className="flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm h-12">
                            <span className="text-muted-foreground">Choose a course</span>
                            <ChevronDown className="size-4 opacity-50" />
                          </div>
                        }
                      >
                        <Select
                          value={formData.course}
                          onValueChange={(value) =>
                            setFormData({ ...formData, course: value })
                          }
                        >
                          <SelectTrigger className={`w-full ${errors.course ? 'border-red-500' : ''}`}>
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sainik-6">Sainik School - Class 6th</SelectItem>
                            <SelectItem value="sainik-9">Sainik School - Class 9th</SelectItem>
                            <SelectItem value="jnv-6">JNV - Class 6th</SelectItem>
                            <SelectItem value="jnv-9">JNV - Class 9th</SelectItem>
                          </SelectContent>
                        </Select>
                      </ClientOnly>
                    </div>
                    {errors.course && (
                      <p className="text-sm text-red-500">{errors.course}</p>
                    )}
                  </div>

                  {/* Class Select */}
                  <div className="space-y-2">
                    <Label className="text-sm text-arastu-dark font-medium">
                      Select Class <span className="text-red-500">*</span>
                    </Label>
                    <div className="mobile-input">
                      <ClientOnly
                        fallback={
                          <div className="flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm h-12">
                            <span className="text-muted-foreground">Choose your class</span>
                            <ChevronDown className="size-4 opacity-50" />
                          </div>
                        }
                      >
                        <Select
                          value={formData.class}
                          onValueChange={(value) =>
                            setFormData({ ...formData, class: value })
                          }
                        >
                          <SelectTrigger className={`w-full ${errors.class ? 'border-red-500' : ''}`}>
                            <SelectValue placeholder="Choose your class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">Class 6th</SelectItem>
                            <SelectItem value="9">Class 9th</SelectItem>
                          </SelectContent>
                        </Select>
                      </ClientOnly>
                    </div>
                    {errors.class && (
                      <p className="text-sm text-red-500">{errors.class}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-auto bg-arastu-orange hover:bg-orange-600 text-white font-bold text-base py-6 shadow-lg shadow-arastu-orange/20"
                  >
                    Book Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
