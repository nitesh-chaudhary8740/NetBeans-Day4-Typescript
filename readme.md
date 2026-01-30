# 🟦 TypeScript Learning Roadmap 2026

A comprehensive, step-by-step guide to mastering TypeScript. Use this as a checklist for your learning journey.

---

## 🟢 Phase 1: The Essentials (Beginner)
*Foundational concepts and setting up your environment.*

- [ ] **1. Introduction & Setup**
    - [ ] What is TypeScript? (Superset of JS)
    - [ ] Installing the Compiler (`npm install -g typescript`)
    - [ ] Understanding `tsconfig.json`
    - [ ] Running TS with `tsc` and `ts-node`
- [ ] **2. Basic Types**
    - [ ] Primitives: `string`, `number`, `boolean`
    - [ ] `null` and `undefined`
    - [ ] The `any` type (and why to avoid it)
    - [ ] Arrays and Tuples
    - [ ] Enums (Numeric vs. String)
- [ ] **3. Functions**
    - [ ] Parameter type annotations
    - [ ] Return type annotations
    - [ ] Optional and Default parameters
    - [ ] Void, Never, and Unknown types

---

## 🟡 Phase 2: Structural Typing (Intermediate)
*Defining complex shapes and object-oriented patterns.*

- [ ] **4. Interfaces & Type Aliases**
    - [ ] Interface vs. Type Alias (Differences & Use cases)
    - [ ] Optional (`?`) and Readonly properties
    - [ ] Extending Interfaces (Inheritance)
    - [ ] Index Signatures
- [ ] **5. Unions, Intersections & Narrowing**
    - [ ] Union Types (`|`)
    - [ ] Intersection Types (`&`)
    - [ ] Type Narrowing (typeof, instanceof, truthiness)
    - [ ] Discriminated Unions (The Power of `kind` properties)
- [ ] **6. Classes**
    - [ ] Access Modifiers: `public`, `private`, `protected`
    - [ ] Shorthand Initialization
    - [ ] Abstract Classes vs. Interfaces
    - [ ] Getters and Setters

---

## 🟠 Phase 3: Generics & Utility Types (Advanced)
*Writing reusable, flexible, and type-safe logic.*

- [ ] **7. Generics**
    - [ ] Generic Functions (`<T>`)
    - [ ] Generic Interfaces and Classes
    - [ ] Generic Constraints (`extends`)
- [ ] **8. Built-in Utility Types**
    - [ ] `Partial<T>`, `Required<T>`, `Readonly<T>`
    - [ ] `Pick<T, K>`, `Omit<T, K>`
    - [ ] `Record<K, T>`
    - [ ] `ReturnType<T>`, `Parameters<T>`
- [ ] **9. Advanced Type Manipulation**
    - [ ] Keyof Operator
    - [ ] Typeof Operator
    - [ ] Indexed Access Types
    - [ ] Mapped Types
    - [ ] Conditional Types (`T extends U ? X : Y`)
    - [ ] Template Literal Types

---

## 🔴 Phase 4: Real-World Integration (Expert)
*Applying TS to the modern ecosystem.*

- [ ] **10. Modules & Configuration**
    - [ ] ES Modules (import/export)
    - [ ] Module Resolution logic
    - [ ] Deep dive into `tsconfig` (Strict mode, Paths, Target)
- [ ] **11. TypeScript with React**
    - [ ] Typing Functional Components (`React.FC`)
    - [ ] Typing Hooks (`useState<T>`, `useRef<T>`)
    - [ ] Typing Events & Forms
- [ ] **12. Backend & Ecosystem**
    - [ ] Node.js + TypeScript (Express/NestJS)
    - [ ] Working with External Libraries (`@types`)
    - [ ] Declaration Files (`.d.ts`)
    - [ ] Decorators (Experimental features)

---

## 🏆 Final Project Ideas
- [ ] **Build a Type-Safe API Wrapper** (using Generics)
- [ ] **Task Management App** (React + TS + LocalStorage)
- [ ] **CLI Tool** (Node + TS + Commander)