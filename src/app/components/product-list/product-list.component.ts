
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  query: string = '';
  category: string = 'All';
  categories: string[] = [];

  constructor(private http: HttpClient, private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/products.json').subscribe(data => {
      this.products = data;
      this.categories = ['All', ...Array.from(new Set(data.map(p => p.category)))];

      this.title.setTitle('Products - Lahoti Plywood Center');
      this.meta.updateTag({ name: 'description', content: 'Bulk plywood, laminates, adhesives and hardware — view product list and request quotes.' });
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Lahoti Plywood Center",
        "url": "https://example.com",
        "telephone": "+91-0000000000"
      };
      this.meta.updateTag({ name: 'application/ld+json', content: JSON.stringify(jsonLd) });
    });
  }
}
