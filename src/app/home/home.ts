import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {  MenuItem,  } from 'primeng/api';
import { Breadcrumb, BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,DialogModule, BreadcrumbModule, Breadcrumb],

  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products: Product[] = [];
  selectedProducts: Product[] = [];
  productDialog: boolean = false;
  product: Product = { id: '' };
  submitted: boolean = false;
  statuses: any[] = [];
  cols: Column[] = [];
  exportColumns: ExportColumn[] = [];

  home: MenuItem = { icon: 'pi pi-qrcode', routerLink: '/' };
  items: MenuItem[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Navigation menu
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-qrcode', route: '/Dashboard' },
      { label: 'Wallet', icon: 'pi pi-wallet', route: '/wallet' },
    ];

    // Column & statuses setup
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'image', header: 'Image' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
      { field: 'rating', header: 'Reviews' },
      { field: 'inventoryStatus', header: 'Status' },
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    this.statuses = [
      { label: 'INSTOCK', value: 'INSTOCK' },
      { label: 'LOWSTOCK', value: 'LOWSTOCK' },
      { label: 'OUTOFSTOCK', value: 'OUTOFSTOCK' },
    ];

    // **Demo Data**
    this.products = [
      {
        id: 'A001',
        code: 'P001',
        name: 'Apple iPhone 14',
        image: 'apple.jpg',
        price: 999,
        category: 'Smartphones',
        rating: 4.5,
        inventoryStatus: 'INSTOCK',
      },
      {
        id: 'A002',
        code: 'P002',
        name: 'Samsung Galaxy S23',
        image: 'samsung.jpg',
        price: 899,
        category: 'Smartphones',
        rating: 4,
        inventoryStatus: 'LOWSTOCK',
      },
      {
        id: 'A003',
        code: 'P003',
        name: 'Sony WH-1000XM5',
        image: 'sony.jpg',
        price: 349,
        category: 'Headphones',
        rating: 5,
        inventoryStatus: 'OUTOFSTOCK',
      },
    ];
  }
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
      selectedMethod: 'instapay' | 'card' | null = null;

  selectMethod(method: 'instapay' | 'card') {
    this.selectedMethod = method;
  }
}

interface Product {
  id: string;
  code?: string;
  name?: string;
  image?: string;
  price?: number;
  category?: string;
  rating?: number;
  inventoryStatus?: string;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}
