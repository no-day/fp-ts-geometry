/** @since 0.1.0 */

import { pipe } from 'fp-ts/function';
import * as F from 'fp-ts/Functor';
import * as S from 'fp-ts/Semiring';
import * as P from 'fp-ts/Pointed';
import * as A from 'fp-ts/Apply';

// --------------------------------------------------------------------------------------------------------------------
// Model
// --------------------------------------------------------------------------------------------------------------------

/**
 * Describes a point in a two dimensional space
 *
 * @since 0.1.0
 * @category Model
 * @example
 *   import { Point2d } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   type Point2dNumber = Point2d<number>;
 *   type Point2dBoolean = Point2d<boolean>;
 */
export type Point2d<T> = { readonly Point2d: unique symbol; _URI: URI; _A: T };

// --------------------------------------------------------------------------------------------------------------------
// Constructors
// --------------------------------------------------------------------------------------------------------------------

/**
 * The origin in a two dimensional space
 *
 * @since 0.1.0
 * @category Constructors
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d';
 *   import { Field as n } from '@no-day/fp-ts-geometry/number';
 *
 *   assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 });
 */
export const origin = <T>(S: S.Semiring<T>): Point2d<T> => fromInternal({ x: S.zero, y: S.zero });

/**
 * Creates a two dimensional point from x and y coordinates
 *
 * @since 0.1.0
 * @category Constructors
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, xy } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   assert.deepStrictEqual(pipe(xy(3, 8), toRecord), { x: 3, y: 8 });
 */
export const xy = <T>(x: T, y: T): Point2d<T> => fromInternal({ x, y });

// --------------------------------------------------------------------------------------------------------------------
// Functor
// --------------------------------------------------------------------------------------------------------------------

/**
 * Maps over a Point2d's inner type
 *
 * @since 0.1.0
 * @category Functor
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, xy, map } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       xy(3, 8),
 *       map((_) => _.toString()),
 *       toRecord
 *     ),
 *     { x: '3', y: '8' }
 *   );
 */
export const map = <T1, T2>(f: (x: T1) => T2) => (point: Point2d<T1>): Point2d<T2> =>
  pipe(
    point,
    overInternal(({ x, y }) => ({ x: f(x), y: f(y) }))
  );

// --------------------------------------------------------------------------------------------------------------------
// Pointed
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Pointed
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, of } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   assert.deepStrictEqual(pipe(of('hello'), toRecord), { x: 'hello', y: 'hello' });
 */
export const of = <T>(t: T): Point2d<T> => xy(t, t);

// --------------------------------------------------------------------------------------------------------------------
// Apply
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Apply
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, ap, xy } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       xy(
 *         (x: number) => (-x).toString(),
 *         (y: number) => y.toString()
 *       ),
 *       ap(xy(3, 8)),
 *       toRecord
 *     ),
 *     { x: '-3', y: '8' }
 *   );
 */
export const ap = <T1>(point: Point2d<T1>) => <T2>(f: Point2d<(x: T1) => T2>): Point2d<T2> =>
  pipe(
    point,
    overInternal(({ x, y }) => {
      const fs = toInternal(f);
      return { x: fs.x(x), y: fs.y(y) };
    })
  );

// --------------------------------------------------------------------------------------------------------------------
// Non-pipeables
// --------------------------------------------------------------------------------------------------------------------

const map_: F.Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f));

const ap_: A.Apply1<URI>['ap'] = (fa, f) => pipe(fa, ap(f));

// --------------------------------------------------------------------------------------------------------------------
// Instances
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Instances
 */
export const URI = 'Point2d';

/**
 * @since 0.1.0
 * @category Instances
 */
export type URI = typeof URI;

declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    readonly [URI]: Point2d<A>;
  }
}

/**
 * @since 0.1.0
 * @category Instances
 */
export const Functor: F.Functor1<URI> = { URI: URI, map: map_ };

/**
 * @since 0.1.0
 * @category Instances
 */
export const Pointed: P.Pointed<URI> = { URI: URI, of };

/**
 * @since 0.1.0
 * @category Instances
 */
export const Apply: A.Apply1<URI> = { ...Functor, ap: ap_ };
// --------------------------------------------------------------------------------------------------------------------
// Destructors
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Destructors
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d';
 *   import { Field as n } from '@no-day/fp-ts-geometry/number';
 *
 *   assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 });
 */
export const toRecord = <T>(point: Point2d<T>): { x: T; y: T } => toInternal(point);

// --------------------------------------------------------------------------------------------------------------------
// Internal
// --------------------------------------------------------------------------------------------------------------------

type Point2dInternal<T> = { x: T; y: T };

const fromInternal = <T>(pt: Point2dInternal<T>): Point2d<T> => (pt as unknown) as Point2d<T>;

const toInternal = <T>(pt: Point2d<T>): Point2dInternal<T> => (pt as unknown) as Point2dInternal<T>;

const overInternal = <T1, T2>(f: (point: Point2dInternal<T1>) => Point2dInternal<T2>) => (
  point: Point2d<T1>
): Point2d<T2> => pipe(point, toInternal, f, fromInternal);
