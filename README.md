# 📊 Algorithmic Statistical Data Parser

A high-performance computational statistics calculator built using **React** and **Vite**. This application focuses on data serialization, sanitization, and the algorithmic computation of core statistical metrics from raw user-input data streams.

## 🧠 Algorithmic Framework & Time Complexities
* **Data Sanitization ($O(n)$):** Implements strong regular expression boundaries and functional parsing (`.split()`, `.map()`, `.filter()`) to securely handle dirty comma-separated strings, dropping invalid NaN data dynamically.
* **Deterministic Average Execution ($O(n)$):** Utilizes JavaScript accumulators (`.reduce()`) to compute the mathematical arithmetic Mean without multi-pass overhead.
* **High-Efficiency Median Sorting ($O(n \log n)$):** Implements isolated array slicing (`.slice()`) to preserve data state immutability, combined with **Merge Sort / Timsort** mechanics for predictable sorting under heavy loads.
* **Frequency Mapping for Mode Analysis ($O(n)$):** Employs a single-pass **Hash Map / Object Lookup** structure to record data frequencies, dynamically identifying multi-modal distributions or verifying zero-mode exceptions.
* **Variance & Deviation Dispersion ($O(n)$):** Calculates structural data spread using squared absolute deviations from the computed mean, establishing a foundational processing step for machine learning features.

## 🛠️ Infrastructure
* **State Engine:** Synchronous batch state mutations using functional React hooks.
* **Interface Architecture:** Modular CSS Grid utilizing fluid grid auto-fits and flexible media nodes for optimized aspect ratios.