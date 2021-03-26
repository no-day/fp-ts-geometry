# fp-ts-geometry

[API Docs](https://no-day.github.io/fp-ts-geometry/)

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Rationale](#rationale)
<!-- AUTO-GENERATED-CONTENT:END -->

# Rationale

This library is inspired by the great Elm Package [elm-geometry](https://package.elm-lang.org/packages/ianmackenzie/elm-geometry/latest/). Which is a large collection of 2D and 3D geometric data types and operations.

The structure of the modules and many API names are taken from this library.

One of the features of elm-geometry is that tracks units and coordinate system information at the type level. We find this very powerful, but decided to go another way in this library.

All data structures have type parameter for their inner coordinate values. That means this library does not know anything about this types. In other words: Unlike elm-geometry the implementation is not number/float specific. Instead all operations require to pass a (semi)ring or field instance that powers the internals computations.
