---
title: number.ts
nav_order: 1
parent: Modules
---

## number overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Combinators](#combinators)
  - [add](#add)
  - [div](#div)
  - [mul](#mul)
  - [sub](#sub)
- [Constructors](#constructors)
  - [one](#one)
  - [zero](#zero)
- [Instances](#instances)
  - [Field](#field)
  - [Ring](#ring)
  - [Semiring](#semiring)

---

# Combinators

## add

**Signature**

```ts
export declare const add: (x1: number) => (x2: number) => number
```

Added in v0.1.0

## div

**Signature**

```ts
export declare const div: (x1: number) => (x2: number) => number
```

Added in v0.1.0

## mul

**Signature**

```ts
export declare const mul: (x1: number) => (x2: number) => number
```

Added in v0.1.0

## sub

**Signature**

```ts
export declare const sub: (x1: number) => (x2: number) => number
```

Added in v0.1.0

# Constructors

## one

**Signature**

```ts
export declare const one: 1
```

Added in v0.1.0

## zero

**Signature**

```ts
export declare const zero: 0
```

Added in v0.1.0

# Instances

## Field

Non law abiding ring instance for number

**Signature**

```ts
export declare const Field: F.Field<number>
```

Added in v0.1.0

## Ring

Non law abiding ring instance for number

**Signature**

```ts
export declare const Ring: R.Ring<number>
```

Added in v0.1.0

## Semiring

Non law abiding semiring instance for number

**Signature**

```ts
export declare const Semiring: S.Semiring<number>
```

Added in v0.1.0
