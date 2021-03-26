---
title: Point2d.ts
nav_order: 2
parent: Modules
---

## Point2d overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [origin](#origin)
  - [xy](#xy)
- [Destructors](#destructors)
  - [toRecord](#torecord)
- [Model](#model)
  - [Point2d (type alias)](#point2d-type-alias)

---

# Constructors

## origin

The origin in a two dimensional space

**Signature**

```ts
export declare const origin: <T>(S: Semiring<T>) => Point2d<T>
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d'
import { Field as n } from '@no-day/fp-ts-geometry/number'

assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 })
```

Added in v1.0.0

## xy

Creates a two dimensional point from x and y coordinates

**Signature**

```ts
export declare const xy: <T>(x: T, y: T) => Point2d<T>
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, xy } from '@no-day/fp-ts-geometry/Point2d'

assert.deepStrictEqual(pipe(xy(3, 8), toRecord), { x: 3, y: 8 })
```

Added in v1.0.0

# Destructors

## toRecord

**Signature**

```ts
export declare const toRecord: <T>(point: Point2d<T>) => { x: T; y: T }
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d'
import { Field as n } from '@no-day/fp-ts-geometry/number'

assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 })
```

Added in v1.0.0

# Model

## Point2d (type alias)

Describes a point in a two dimensional space

**Signature**

```ts
export type Point2d<T> = { readonly Point2d: unique symbol }
```

**Example**

```ts
import { Point2d } from '@no-day/fp-ts-geometry/Point2d'

type Point2dNumber = Point2d<number>
type Point2dBoolean = Point2d<boolean>
```

Added in v1.0.0
