import { 
 
  Download, 
  Phone, 
  
} from 'lucide-react';


// Call to Action Component
const CallToAction = () => (
  <section className="bg-blue-600 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Start Your Clinical Research Journey Today
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Take the first step towards a rewarding career in healthcare and research
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center">
          <Download className="mr-2" /> Download Brochure
        </button>
        <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition flex items-center">
          <Phone className="mr-2" /> Book Free Consultation
        </button>
      </div>
    </div>
  </section>
);
export default  CallToAction;