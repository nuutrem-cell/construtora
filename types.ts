
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  status: 'Lançamento' | 'Em Obras' | 'Pronto para Morar';
  highlights: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
