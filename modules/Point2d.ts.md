---
title: Point2d.ts
nav_order: 2
parent: Modules
---

## Point2d overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [origin](#origin)
  - [xy](#xy)
- [Destructors](#destructors)
  - [toRecord](#torecord)
- [Functor](#functor)
  - [map](#map)
- [Instances](#instances)
  - [Functor](#functor-1)
  - [Pointed](#pointed)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
- [Model](#model)
  - [Point2d (type alias)](#point2d-type-alias)
- [Pointed](#pointed-1)
  - [of](#of)

---

# Constructors

## origin

The origin in a two dimensional space

**Signature**

```ts
export declare const origin: <T>(S: S.Semiring<T>) => Point2d<T>
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d'
import { Field as n } from '@no-day/fp-ts-geometry/number'

assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 })
```

Added in v0.1.0

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

Added in v0.1.0

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

Added in v0.1.0

# Functor

## map

Maps over a Point2d's inner type

**Signature**

```ts
export declare const map: <T1, T2>(f: (x: T1) => T2) => (point: Point2d<T1>) => Point2d<T2>
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, xy, map } from '@no-day/fp-ts-geometry/Point2d'

assert.deepStrictEqual(
  pipe(
    xy(3, 8),
    map((_) => _.toString()),
    toRecord
  ),
  { x: '3', y: '8' }
)
```

Added in v0.1.0

# Instances

## Functor

**Signature**

```ts
export declare const Functor: F.Functor1<'Point2d'>
```

Added in v0.1.0

## Pointed

**Signature**

```ts
export declare const Pointed: P.Pointed<'Point2d'>
```

Added in v0.1.0

## URI

**Signature**

```ts
export declare const URI: 'Point2d'
```

Added in v0.1.0

## URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v0.1.0

# Model

## Point2d (type alias)

Describes a point in a two dimensional space

**Signature**

```ts
export type Point2d<T> = { readonly Point2d: unique symbol; _URI: URI; _A: T }
```

**Example**

```ts
import { Point2d } from '@no-day/fp-ts-geometry/Point2d'

type Point2dNumber = Point2d<number>
type Point2dBoolean = Point2d<boolean>
```

Added in v0.1.0

# Pointed

## of

**Signature**

```ts
export declare const of: <T>(t: T) => Point2d<T>
```

**Example**

```ts
import { pipe } from 'fp-ts/function'
import { toRecord, of } from '@no-day/fp-ts-geometry/Point2d'

assert.deepStrictEqual(pipe(of('hello'), toRecord), { x: 'hello', y: 'hello' })
```

Added in v0.1.0
