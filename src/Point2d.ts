/** @since 1.0.0 */

import { Field } from 'fp-ts/lib/Field';
import { Semiring } from 'fp-ts/Semiring';

// --------------------------------------------------------------------------------------------------------------------
// Model
// --------------------------------------------------------------------------------------------------------------------

/**
 * Describes a point in a two dimensional space
 *
 * @since 1.0.0
 * @category Model
 * @example
 *   import { Point2d } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   type Point2dNumber = Point2d<number>;
 *   type Point2dBoolean = Point2d<boolean>;
 */
export type Point2d<T> = { readonly Point2d: unique symbol };

// --------------------------------------------------------------------------------------------------------------------
// Constructors
// --------------------------------------------------------------------------------------------------------------------

/**
 * The origin in a two dimensional space
 *
 * @since 1.0.0
 * @category Constructors
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, origin } from '@no-day/fp-ts-geometry/Point2d';
 *   import { Field as n } from '@no-day/fp-ts-geometry/number';
 *
 *   assert.deepStrictEqual(pipe(origin(n), toRecord), { x: 0, y: 0 });
 */
export const origin = <T>(S: Semiring<T>): Point2d<T> => fromInternal({ x: S.zero, y: S.zero });

/**
 * Creates a two dimensional point from x and y coordinates
 *
 * @since 1.0.0
 * @category Constructors
 * @example
 *   import { pipe } from 'fp-ts/function';
 *   import { toRecord, xy } from '@no-day/fp-ts-geometry/Point2d';
 *
 *   assert.deepStrictEqual(pipe(xy(3, 8), toRecord), { x: 3, y: 8 });
 */
export const xy = <T>(x: T, y: T): Point2d<T> => fromInternal({ x, y });

// --------------------------------------------------------------------------------------------------------------------
// Destructors
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 1.0.0
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
