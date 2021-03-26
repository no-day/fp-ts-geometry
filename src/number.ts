/** @since 0.1.0 */

import { pipe } from 'fp-ts/function';
import * as S from 'fp-ts/Semiring';
import * as R from 'fp-ts/Ring';
import * as F from 'fp-ts/Field';

// --------------------------------------------------------------------------------------------------------------------
// Constructors
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Constructors
 */
export const zero = 0;

/**
 * @since 0.1.0
 * @category Constructors
 */
export const one = 1;

// --------------------------------------------------------------------------------------------------------------------
// Combinators
// --------------------------------------------------------------------------------------------------------------------

/**
 * @since 0.1.0
 * @category Combinators
 */
export const add = (x1: number) => (x2: number): number => x1 + x2;

/**
 * @since 0.1.0
 * @category Combinators
 */
export const sub = (x1: number) => (x2: number): number => x1 - x2;

/**
 * @since 0.1.0
 * @category Combinators
 */
export const mul = (x1: number) => (x2: number): number => x1 * x2;

/**
 * @since 0.1.0
 * @category Combinators
 */
export const div = (x1: number) => (x2: number): number => x1 / x2;

// --------------------------------------------------------------------------------------------------------------------
// Non-pipeables
// --------------------------------------------------------------------------------------------------------------------

const add_: S.Semiring<number>['add'] = (x1, x2) => pipe(x2, add(x1));

const sub_: R.Ring<number>['sub'] = (x1, x2) => pipe(x2, sub(x1));

const mul_: S.Semiring<number>['mul'] = (x1, x2) => pipe(x2, mul(x1));

const div_: F.Field<number>['div'] = (x1, x2) => pipe(x2, div(x1));

// --------------------------------------------------------------------------------------------------------------------
// Instances
// --------------------------------------------------------------------------------------------------------------------

/**
 * Non law abiding semiring instance for number
 *
 * @since 0.1.0
 * @category Instances
 */
export const Semiring: S.Semiring<number> = {
  add: add_,
  zero,
  one,
  mul: mul_,
};

/**
 * Non law abiding ring instance for number
 *
 * @since 0.1.0
 * @category Instances
 */
export const Ring: R.Ring<number> = {
  ...Semiring,
  sub: sub_,
};

/**
 * Non law abiding ring instance for number
 *
 * @since 0.1.0
 * @category Instances
 */
export const Field: F.Field<number> = {
  ...Ring,
  degree: () => 1,
  div: div_,
  mod: () => 0.0,
};
