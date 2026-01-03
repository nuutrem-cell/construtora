
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import Reveal from '../components/Reveal';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Residencial', 'Comercial', 'Alto Padrão', 'Premium'];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || (filter === 'Residencial' && (p.category === 'Premium' || p.category === 'Alto Padrão')));

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h4 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Portfólio</h4>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-12">Empreendimentos</h1>
        </Reveal>

        <Reveal delay={200} className="mb-16">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-20">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx % 2 === 0 ? 0 : 200}>
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-3/5 overflow-hidden group shadow-2xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded">{project.status}</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">{project.title}</h2>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-slate-600 mb-8 italic">
                    <MapPin size={18} className="text-amber-600" />
                    {project.location}, Juiz de Fora - MG
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {project.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        {h}
                      </div>
                    ))}
                  </div>
                  <button className="bg-slate-900 hover:bg-amber-600 text-white font-bold py-5 px-10 self-start flex items-center gap-3 transition-all uppercase tracking-widest text-xs">
                    Solicitar Apresentação <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
