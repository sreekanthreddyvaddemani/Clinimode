import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import AnimatedLine from '../AnimatedLine';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(1);
  const timerRef = useRef<number | null>(null);

  const testimonials = [
    { 
      id: 1, 
      name: 'Dr. Priya Sharma', 
      profession: 'Clinical Research Director, AstraZeneca', 
      content: 'Clinimode transformed our clinical data management processes. Their training program helped our staff reduce data query resolution time by 40% with proper EDC system implementation.',
      rating: 5
    },
    { 
      id: 2, 
      name: 'Rajesh Patel', 
      profession: 'Head of Biostatistics, IQVIA', 
      content: 'The expertise Clinimode graduates bring in statistical analysis and CDISC compliance helped us achieve regulatory approval 3 months ahead of schedule on our Phase III trial.',
      rating: 5
    },
    { 
      id: 3, 
      name: 'Dr. Ananya Gupta', 
      profession: 'Medical Director, Novo Nordisk', 
      content: 'Clinimode\'s training covers all essential regulatory requirements. Their graduates navigate complex FDA and EMA requirements seamlessly, which is invaluable for our clinical trials.',
      rating: 4
    },
    { 
      id: 4, 
      name: 'Michael Chen', 
      profession: 'Clinical Operations Manager, Syneos Health', 
      content: 'We\'ve hired multiple Clinimode graduates who provided outstanding clinical trial management support. Their risk-based monitoring approach improved our data quality significantly.',
      rating: 5
    },
    { 
      id: 5, 
      name: 'Dr. Sunita Reddy', 
      profession: 'VP Clinical Development, Cipla', 
      content: 'Clinimode\'s placement services connected us with excellent professionals. Their CRAs and data managers integrated seamlessly with our team and demonstrated superior technical skills.',
      rating: 4
    },
    { 
      id: 6, 
      name: 'David Wilson', 
      profession: 'CEO, Radiant Research', 
      content: 'From protocol development to database lock, Clinimode graduates delivered exceptional results. Their therapeutic expertise in oncology trials was particularly impressive.',
      rating: 5
    }
  ];

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1280) setItemsPerSlide(3);
      else if (window.innerWidth >= 768) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    if (autoPlay) {
      timerRef.current = window.setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, itemsPerSlide, currentIndex]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="relative py-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-blue-600 font-semibold uppercase tracking-wider mb-4">Graduate Testimonials</h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Trusted by Clinical Research Leaders</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Hear from pharmaceutical companies, CROs, and research institutions about their experience with Clinimode graduates.
          </p>
          <div className="flex justify-center w-full">
            <div className="w-[500px]">
              <AnimatedLine />
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-blue-500/20 hover:bg-blue-500/30 text-blue-800 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-blue-500/20 hover:bg-blue-500/30 text-blue-800 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={`flex-shrink-0 px-4 ${itemsPerSlide === 3 ? 'w-1/3' : itemsPerSlide === 2 ? 'w-1/2' : 'w-full'}`}>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                    {renderStars(testimonial.rating)}
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="mt-auto">
                      <h4 className="text-gray-800 font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="inline-flex items-center justify-center bg-blue-100 hover:bg-blue-200 border border-blue-300 text-blue-800 px-6 py-2 rounded-full transition-colors duration-300"
          >
            {autoPlay ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;