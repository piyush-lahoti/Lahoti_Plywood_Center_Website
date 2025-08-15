
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(items: any[], query: string, category: string): any[] {
    if (!items) return [];
    const q = (query || '').trim().toLowerCase();
    return items.filter(item => {
      const inCategory = (category === 'All') || (item.category === category);
      if (!inCategory) return false;
      if (!q) return true;
      return [item.name, item.sku, item.description, item.category].join(' ').toLowerCase().includes(q);
    });
  }
}
