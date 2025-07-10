import React from 'react';
import LeafBackground from '../LeafBackground'; 

const testimonials = [
  { name: "Rajiv M", role: "GreenByte Pvt. Ltd.", msg: "Effortless, reliable, and truly sustainable." },
  { name: "Ananya S.", role: "TechNova India", msg: "SortUs helped us stay green and compliant." },
  { name: "Vikram R.", role: "ByteWave Solutions", msg: "Their service is smooth and the impact is real." },
  { name: "Neha K.", role: "EcoGadget Hub", msg: "A trusted partner in our green journey." },
  { name: "Arjun", role: "Nexa Electronic", msg: "We have seen real change with SortUs." },
  { name: "Ritu J.", role: "Reboot Tech Services", msg: "Simple process, great results." },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-[#EDF4ED] px-4 py-20 flex justify-center overflow-hidden">
      {/* Leaf SVG Background */}
      <LeafBackground />

      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-6xl w-full relative z-10">
        <h2 className="text-[2.5rem] text-green-600 font-bold mb-12 text-center">
          People Are Talking
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300 border"
            >
              <blockquote className="italic text-[1.2em] text-[#121010] mb-6 relative">
                <span className="text-green-600/50 text-[1.5em]">“</span>
                {t.msg}
                <span className="text-green-600/50 text-[1.5em]">”</span>
              </blockquote>
              <div className="testimonial-author mt-4">
                <strong className="text-green-600 text-[1.1em] block">{t.name}</strong>
                <span className="text-gray-600 text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
