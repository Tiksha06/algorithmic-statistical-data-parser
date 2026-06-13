import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [metricValue, setMetricValue] = useState({
    mean: '-',
    median: '-',
    mode: '-',
    variance: '-',
    standardDeviation: '-'
  })

  const parseInput = () => {
    return inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num))
  }

  // ******** 1. MEAN ALGORITHM ********
  const calculateMean = (arr) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return (sum / arr.length).toFixed(2)  //2 edcimal places
  }

  // ******** 2. MEDIAN ALGORITHM ********
  const calculateMedian = (arr) => {
    if (arr.length === 0) return 0
    const sorted = arr.slice().sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)

    if (sorded[mid] % 2 === 0) { //even
      return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2)
    } else {
      return sorted[mid].toFixed(2)
    }
  }

  // ******** 3. MODE ALGORITHM (frequency map) ********
  const calculateMode = (arr) => {
    if (arr.length === 0) return '-'
    const frequecyMap = {}
    let maxFreq = 0
    let modes = []

    arr.forEach(num => {
      frequecyMap[num] = (frequecyMap[num] || 0) + 1

      if (frequencyMap[num] > maxFreq) {
        maxFreq = frequecyMap[num]
      }
    });

    if (maxFreq === 1) return 'no unique value'

    for (const num in frequencyMap) {
      if (frequencyMap[num] === maxFreq) {
        modes.push(num);
      }
    }
    return modes.join(', ')
  }

  // ******** 4. VARIANCE AND STANDARD DEVIATION ALGORITHMS ********
  const calculateVarianceAndSD = (arr, meanVal) => {
    if (arr.length === 0) return { variance: '-', standardDeviation: '-' }

    const squaredDifferencesSum = arr.reduce((acc, num) => acc + Math.pow(num - meanVal, 2) || 0)
    const variance = squaredDifferencesSum / arr.length
    const standardDeviation = Math.sqrt(variance)

    return {
      variance: variance.toFixed(2)
      , standardDeviation: standardDeviation.toFixed(2)
    }
  }

  const handleCalculate = () => {
    const data = parseInput()

    const meanVal = parseFloat(calcutateMean(data))
    const medianVal = calculateMedian(data)
    const modeVal = calculateMode(data)
    const { variance, standardDeviation } = calculateVarianceAndSd(data, meanVal)
  }

  setMetrics({
    mean: meanVal,
    median: meadianVal,
    mode: modeVal,
    variance: variance,
    standardDeviation: sd
  });


  return (
    <div className="parser-container">
      <div className="parser-body">
        <h2>📊 Algorithmic Statistical Data Parser</h2>
        <p className="subtitle">Enter numbers separated by commas to calculate statistical measures.</p>

        <input
          type="text"
          className="data-input"
          placeholder="e.g., 12, 5, 8, 5, 20"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}>
        </input>

        <button className="calc-button" onClick={handleCalculate}>~Compute Metrics~</button>

        <div className="results-grid">
          <div className="result-card"><h3>Mean (Average)</h3><p>{metrics.mean}</p></div>
          <div className="result-card"><h3>Median</h3><p>{metrics.median}</p></div>
          <div className="result-card"><h3>Mode</h3><p>{metrics.mode}</p></div>
          <div className="result-card"><h3>Variance</h3><p>{metrics.variance}</p></div>
          <div className="result-card"><h3>Standard Deviation</h3><p>{metrics.standardDeviation}</p></div>
        </div>
      </div>
    </div>
  )
}