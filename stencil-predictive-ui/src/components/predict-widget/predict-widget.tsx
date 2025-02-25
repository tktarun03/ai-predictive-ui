import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'predict-widget',
  styleUrl: 'predict-widget.css',
  shadow: true
})
export class PredictWidget {
  @State() prediction: string = "Waiting for user interaction...";

  generatePrediction() {
    const predictions = [
      "User likely to click next in 3 seconds",
      "User prefers dark mode at night",
      "User engagement score: High",
      "Recommending next action..."
    ];
    this.prediction = predictions[Math.floor(Math.random() * predictions.length)];
  }

  render() {
    return (
      <div class="predict-box">
        <h2>AI Predictive UI</h2>
        <button onClick={() => this.generatePrediction()}>Generate Prediction</button>
        <p>{this.prediction}</p>
      </div>
    );
  }
}
