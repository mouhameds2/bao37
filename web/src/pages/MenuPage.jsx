import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts.js';
import ProductCard from '@/components/ProductCard.jsx';
import CategoryFilter from '@/components/CategoryFilter.jsx';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { useTranslation } from '@/lib/i18n.js';

export default function MenuPage() {
  const { products, categories, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState(null);
  const { t } = useTranslation();

  const filteredProducts = activeCategory 
    ? products.filter(p => p.categoryId === activeCategory)
    : products;

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-24 text-destructive">{t('common.error')}: {error}</div>;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{t('menu.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('menu.subtitle')}
          </p>
        </div>

        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            {t('menu.empty')}
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}