import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useTranslation } from '@/lib/i18n.js';

export default function ProductCard({ product }) {
  const { t, formatCurrency } = useTranslation();
  const imageUrl = product.image 
    ? pb.files.getUrl(product, product.image) 
    : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-xl font-serif font-medium text-foreground">{product.name}</h3>
          <span className="text-primary font-medium whitespace-nowrap">{formatCurrency(product.price)}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>
        <button className="w-full py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mt-auto active:scale-[0.98]">
          <Plus size={18} />
          {t('menu.add_to_order')}
        </button>
      </div>
    </motion.div>
  );
}