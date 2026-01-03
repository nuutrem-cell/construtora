
import React from 'react';
import Reveal from '../components/Reveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h4 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Fale Conosco</h4>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-16">Estamos à disposição em Juiz de Fora.</h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal delay={200}>
            <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 uppercase tracking-widest">Enviar Mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Nome Completo</label>
                    <input 
                      type="text" 
                      className="bg-slate-50 border-b-2 border-slate-200 p-4 outline-none focus:border-amber-600 transition-colors"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Seu E-mail</label>
                    <input 
                      type="email" 
                      className="bg-slate-50 border-b-2 border-slate-200 p-4 outline-none focus:border-amber-600 transition-colors"
                      placeholder="joao@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Assunto</label>
                  <select className="bg-slate-50 border-b-2 border-slate-200 p-4 outline-none focus:border-amber-600 transition-colors">
                    <option>Interesse em Empreendimento</option>
                    <option>Portal do Cliente / Suporte</option>
                    <option>Recrutamento</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="bg-slate-50 border-b-2 border-slate-200 p-4 outline-none focus:border-amber-600 transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button className="w-full bg-slate-900 hover:bg-amber-600 text-white font-black py-5 uppercase tracking-widest transition-all flex items-center justify-center gap-4">
                  Enviar Mensagem <Send size={18} />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={400} className="flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-widest flex items-center gap-3">
                  <MapPin className="text-amber-600" /> Sede Corporativa
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  Rua Halfeld, 000, 15º Andar <br />
                  Centro, Juiz de Fora - MG <br />
                  CEP: 36010-001
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-widest flex items-center gap-3">
                  <Phone className="text-amber-600" /> Atendimento
                </h3>
                <p className="text-slate-500 text-lg font-semibold">
                  (32) 3215-0000 <br />
                  (32) 99999-0000 (WhatsApp)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-widest flex items-center gap-3">
                  <Mail className="text-amber-600" /> Digital
                </h3>
                <p className="text-slate-500 text-lg">
                  contato@lemejf.com.br <br />
                  vendas@lemejf.com.br
                </p>
              </div>

              <div className="pt-8 flex gap-6">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all cursor-pointer">
                  FB
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all cursor-pointer">
                  IG
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all cursor-pointer">
                  IN
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map Placeholder - Imagem aérea urbana realista de JF */}
        <Reveal delay={600} className="mt-32">
          <div className="w-full h-[500px] bg-slate-200 rounded-sm relative overflow-hidden shadow-inner grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 z-10">
               <span className="text-white font-bold tracking-[0.2em] uppercase bg-black/50 px-8 py-4 backdrop-blur-sm border border-white/20">Visite Nossa Sede no Coração de Juiz de Fora</span>
             </div>
             <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920" alt="Juiz de Fora Urban View" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
