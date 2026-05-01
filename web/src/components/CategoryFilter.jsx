import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n.js';

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
          activeCategory === null 
            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            : "bg-transparent text-foreground border-border/30 hover:border-primary/50"
        )}
      >
        {t('menu.filter.all')}
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
            activeCategory === category.id 
              ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
              : "bg-transparent text-foreground border-border/30 hover:border-primary/50"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}