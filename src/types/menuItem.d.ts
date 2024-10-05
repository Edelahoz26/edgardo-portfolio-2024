export interface MenuItem {
    label: string;
    link?: string;
    onClick?: () => void;
  }

 export interface HeaderPros{
    items: MenuItem[]; 
 }