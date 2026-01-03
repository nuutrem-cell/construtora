
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col items-start mb-6">
            <span className="text-3xl font-black tracking-tighter text-white">LEME</span>
            <span className="text-xs tracking-[0.4em] font-semibold uppercase text-slate-500">Construtora</span>
          </Link>
          <p className="text-sm leading-relaxed mb-8">
            Referência em Juiz de Fora por transformar projetos arquitetônicos em realidades sólidas e sofisticadas. Compromisso com a excelência desde a fundação.
          </p>
          <div className="flex gap-4">
            <Instagram className="hover:text-amber-500 cursor-pointer transition-colors" size={20} />
            <Facebook className="hover:text-amber-500 cursor-pointer transition-colors" size={20} />
            <Linkedin className="hover:text-amber-500 cursor-pointer transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Links Úteis</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/projetos" className="hover:text-amber-500 transition-colors">Nossos Empreendimentos</Link></li>
            <li><Link to="/sobre" className="hover:text-amber-500 transition-colors">Nossa História</Link></li>
            <li><Link to="/contato" className="hover:text-amber-500 transition-colors">Portal do Cliente</Link></li>
            <li><Link to="/privacidade" className="hover:text-amber-500 transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-amber-600" />
              (32) 3215-0000
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-amber-600" />
              contato@lemejf.com.br
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-amber-600 shrink-0 mt-1" />
              Rua Halfeld, 000 - Centro, Juiz de Fora - MG
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h4>
          <p className="text-xs mb-4">Receba atualizações exclusivas dos nossos novos lançamentos.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-slate-800 border-none px-4 py-3 rounded text-sm focus:ring-1 focus:ring-amber-500 outline-none"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded transition-colors uppercase text-xs tracking-widest">
              Inscrever
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-20 pt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Leme Construtora. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
