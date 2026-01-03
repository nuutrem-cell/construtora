
import React from 'react';
import Reveal from '../components/Reveal';
import { Target, Award, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h4 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Manifesto</h4>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">Onde a solidez encontra o <span className="italic font-light">legado</span>.</h1>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Fundada em Juiz de Fora há mais de 15 anos, a Leme Construtora nasceu com um propósito claro: elevar o padrão da construção civil na região através de processos inteligentes e estética atemporal.
                </p>
                <p>
                  Não construímos apenas edifícios. Criamos marcos urbanos que valorizam o entorno e proporcionam aos nossos clientes a segurança de um investimento sólido e a felicidade de um lar excepcional.
                </p>
                <p>
                  Cada projeto nosso é uma declaração de amor à arquitetura e ao desenvolvimento da Zona da Mata Mineira.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300} className="relative">
              <div className="aspect-[4/5] bg-slate-200 shadow-2xl overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Construction Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-amber-600 p-12 hidden md:block shadow-xl">
                <span className="text-white text-6xl font-black block mb-2">15</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest block">Anos de Excelência</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-t border-slate-200">
          <Reveal>
            <h2 className="text-3xl font-black text-slate-900 mb-16 text-center uppercase tracking-widest">Nossos Pilares</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Target, title: 'Inovação', desc: 'Sempre à frente com tecnologias que otimizam a construção.' },
              { icon: ShieldCheck, title: 'Confiança', desc: 'Transparência total em cada etapa, do contrato à entrega.' },
              { icon: Award, title: 'Qualidade', desc: 'Acabamentos premium e materiais de primeira linha.' },
              { icon: Heart, title: 'Pessoas', desc: 'Foco total na experiência do morador e bem-estar social.' }
            ].map((pilar, idx) => (
              <Reveal key={idx} delay={idx * 150} className="text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                    <pilar.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{pilar.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{pilar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-32 bg-slate-100 p-12 md:p-24 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200 skew-x-[-15deg] translate-x-1/2"></div>
          <div className="relative z-10">
            <Reveal>
              <h2 className="text-4xl font-black text-slate-900 mb-8 italic">"Nossa missão é construir espaços que inspiram a vida a acontecer da melhor forma possível em JF."</h2>
              <span className="text-amber-600 font-bold uppercase tracking-widest">— Diretoria Leme</span>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
