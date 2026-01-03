
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Reveal from '../components/Reveal';
import { ArrowRight, CheckCircle2, Building2, Map, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Imagem noturna puramente urbana, sem mar ou água visível */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000" 
            alt="Skyline Urbano Noturno Landlocked" 
            className="w-full h-full object-cover brightness-[0.25] scale-110 object-center"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <Reveal>
            <h4 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 italic">Leme Construtora | JF</h4>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight max-w-4xl mb-8">
              Arquitetando o <span className="italic font-light text-amber-50/90">futuro</span> de Juiz de Fora.
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
              Transformamos a paisagem urbana de Minas Gerais com empreendimentos de alto padrão, unindo engenharia de precisão e design atemporal.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projetos" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 px-10 flex items-center justify-center gap-3 transition-all rounded-sm uppercase tracking-widest text-sm shadow-xl"
              >
                Ver Projetos <ArrowRight size={18} />
              </Link>
              <Link 
                to="/sobre" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-10 flex items-center justify-center transition-all rounded-sm uppercase tracking-widest text-sm border border-white/30"
              >
                Nossa História
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Nossa marca em cada detalhe.</h2>
              <p className="text-slate-500 text-lg">Selecionamos localizações privilegiadas em Juiz de Fora para garantir valorização e qualidade de vida real.</p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/projetos" className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Ver todos os empreendimentos <ArrowRight size={20} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <Reveal key={project.id} delay={idx * 150}>
                <div className="group relative bg-slate-100 overflow-hidden aspect-[4/5] shadow-lg">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.location}</p>
                    <Link to={`/projetos`} className="inline-flex h-10 w-10 items-center justify-center bg-white text-slate-900 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <Reveal>
              <div className="flex flex-col items-center">
                <Building2 className="text-amber-600 mb-4" size={40} />
                <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">15+</span>
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Anos de Mercado</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center">
                <Map className="text-amber-600 mb-4" size={40} />
                <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">240</span>
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Unidades Entregues</span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col items-center">
                <Users className="text-amber-600 mb-4" size={40} />
                <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">1.2k</span>
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Clientes Satisfeitos</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="text-amber-600 mb-4" size={40} />
                <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">100%</span>
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Prazo Cumprido</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/10 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 leading-tight">Pronto para dar o próximo passo <br className="hidden md:block" /> em direção ao seu novo lar?</h2>
          </Reveal>
          <Reveal delay={200}>
            <Link 
              to="/contato" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-6 px-16 inline-flex items-center gap-4 transition-all rounded-sm uppercase tracking-widest"
            >
              Falar com um Consultor <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
