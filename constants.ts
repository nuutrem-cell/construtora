
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Empreendimentos', path: '/projetos' },
  { label: 'Sobre Nós', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Residencial Gran Viana',
    category: 'Alto Padrão',
    location: 'Bairro São Mateus',
    description: 'Um marco arquitetônico com vista panorâmica e acabamento em mármore travertino.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    status: 'Em Obras',
    highlights: ['4 Suítes', 'Varanda Gourmet', '3 Vagas', 'Lazer Completo']
  },
  {
    id: '2',
    title: 'Leme Corporate Center',
    category: 'Comercial',
    location: 'Centro',
    description: 'O endereço definitivo para negócios de sucesso em Juiz de Fora.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    status: 'Lançamento',
    highlights: ['Auditório', 'Segurança 24h', 'Coffee Lounge', 'Estacionamento Rotativo']
  },
  {
    id: '3',
    title: 'Vila Imperial',
    category: 'Residencial',
    location: 'Bairro Cascatinha',
    description: 'Conforto e sofisticação em uma das áreas mais nobres da cidade.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    status: 'Pronto para Morar',
    highlights: ['Piscina Aquecida', 'Área Fitness', 'Espaço Kids']
  },
  {
    id: '4',
    title: 'Horizon View',
    category: 'Premium',
    location: 'Bairro Bom Pastor',
    description: 'Onde a natureza encontra a modernidade urbana.',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    status: 'Em Obras',
    highlights: ['Vista para o Parque', 'Automação Residencial', 'Sustentabilidade']
  }
];
