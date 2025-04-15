import React from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  Download, 
  Phone, 
  CheckCircle, 
  Globe 
} from 'lucide-react';







// Testimonials Component
const CliniTestimonials = () => {
  const testimonials = [
    {
      name: 'Srimukhi',
      quote: 'The training provided a perfect balance of theoretical and practical knowledge, helping me secure a job in pharmacovigilance!',
      role: 'Clinical Research Associate'
    },
    {
      name: 'Charan',
      quote: 'Well-structured courses and excellent placement support helped me transition smoothly into clinical research.',
      role: 'Data Manager'
    },
    {
      name: 'Paul Andrew',
      quote: 'The expert-led sessions gave me hands-on experience in clinical data management.',
      role: 'Regulatory Specialist'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md transform transition hover:scale-105 hover:shadow-xl"
            >
              <p className="italic mb-4 text-gray-700">
                "{testimonial.quote}"
              </p>
              <div className="text-right">
                <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; export default CliniTestimonials;