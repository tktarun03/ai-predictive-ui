import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Predictive UI Dashboard</h1>
    <div class="dashboard">
      <predict-widget></predict-widget>
      <wasm-behavior-predict></wasm-behavior-predict>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }