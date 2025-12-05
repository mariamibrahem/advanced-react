# Advanced React - Practical Section

This repository contains practical examples and demonstrations for the **Advanced React** book. This is a learning project created by **Mariam** for educational purposes and knowledge sharing.

## Introduction

> 📹 [Watch the Introduction](https://drive.google.com/file/d/1FfVL1cgHB8pmwF_L1Jv2FkLjInmffoSo/view?usp=sharing)

> 📚 [Advanced React Book](https://drive.google.com/file/d/1Nz26k7l66UAWPMd7JwYfNfFA4mpBZERV/view?usp=sharing)

## Purpose

This practical section serves to:
- Provide hands-on examples that complement the Advanced React book
- Demonstrate key concepts through interactive code examples
- Share knowledge 

## Chapters

This repository covers the following chapters from the Advanced React book:

### Chapter 1: [Intro to re-renders]

**Examples:**
- **Moving State Down** - Demonstrates how moving state down the component tree prevents unnecessary re-renders of heavy components. Shows the performance difference between keeping state in a parent component (causing delayed modal appearance) versus moving state to a child component (allowing instant modal display).

- **Rerender Myth** - Explores common misconceptions about React re-renders and how React efficiently manages component updates. Demonstrates that props are not the cause of rerenders.

### Chapter 2: [Elements, children as props, and re-renders]

**Examples:**
- **Children Prop Pattern for Performance** - Shows how to use the children prop pattern to improve performance and prevent unnecessary re-renders in React applications. Demonstrates how passing components as children optimizes rendering.

- **State Reset** - Illustrates how React handles state reset and reconciliation when component keys change. Demonstrates React's reconciliation algorithm and how component type affects instance reuse.

- **Dynamic Lists & Keys** - Covers best practices for rendering dynamic lists in React, including proper key usage and common pitfalls. Explains why keys are essential, why using index as a key is problematic, and how unique IDs solve the problem.

### Chapter 5: [ Memoization ]

**Examples:**
- **Memoizing Props Anti-Pattern** - Explains anti-patterns related to memoizing props and demonstrates the correct approaches to optimize component performance. Shows that memoizing props in the parent doesn't prevent rerenders - you need `React.memo` on the child component.

### Chapter 10: [ Closures ]

**Examples:**
- **Hoisting** - Explores different types of hoisting in JavaScript, including functional hoisting, variable hoisting, and the Temporal Dead Zone (TDZ). Demonstrates how JavaScript handles variable and function declarations before code execution.

- **Lexical Environment** - Covers the concept of lexical environment in JavaScript, explaining how variables and functions are scoped and accessed within their lexical context.

- **Variable Scopes** - Demonstrates variable scopes in JavaScript, showing how different scoping rules affect variable accessibility and behavior throughout the code.

- **Var** - Explains the behavior of the `var` keyword in JavaScript, including its lack of block scope, tolerance of redeclarations, and how variables can be declared below their use due to hoisting.

## Getting Started

This project uses React with Vite. To get started:

```bash
npm install
npm run dev
```

## About

Created by **Mariam** for learning and sharing knowledge about advanced React concepts.

---

*This is a practical companion to the Advanced React book, designed to help understand complex React patterns through hands-on examples.*
