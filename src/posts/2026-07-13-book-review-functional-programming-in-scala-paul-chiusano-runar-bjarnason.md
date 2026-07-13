---
title: book review - functional programming in scala by paul chiusano and runar bjarnason
date: 2026-07-13
tags: computer science, functional programming
---

_functional programming in scala_ by paul chiusano and runar bjarnason is a
classic, and the first book i read when i first learned functional programming
around a year and a half ago. returning to it now, it holds up as one of the
best books i've read on programming, and i'd say it's a must-read for anyone
interested in functional programming. the book is primarily targeted at
developers whose primary experience is with object-oriented languages like
java, and it does a great job motivating why you should care about functional
programming and taking the reader on a guided tour of the major facets of the
paradigm. i'd consider it the best introduction to functional programming
because of its ability to ground the concepts in real-world code. nothing in
the book feels out of place, and it gives you a strong familiarity with the
fundamentals of the field.

part one is an introduction to the "must-know" aspects of functional
programming (what is it, purely functional data structures, errors, lazy
evaluation, and purely functional state). this is the most valuable section of
the book, and i encourage even developers who aren't interested in functional
programming to read at least the first part. all the decisions they make on how
to structure and design their code are tied back to the key concept introduced
in chapter one - _referential transparency_, which denotes the ability to
replace every expression with its direct value without changing the meaning of
the program. the authors work through the implications of this concept on the
most fundamental parts of programming, giving the reader a clear view of why
data structures look the way they do in functional languages.

part two walks the reader through the design of three libraries (parallelism /
threading, property-based testing, and parsing). by the authors' own admission,
the goal of the chapter is not necessarily to design specific libraries but to
work through problems in creating a purely functional library and to point to
key commonalities. this is the setup for parts 3 and 4, which discuss design
patterns formally and in much more detail; this section tries to show how those
patterns emerge organically from the design of real-world code.

this is a pedagogical structure that i think could work for many people, but i
struggled especially with part 2 for this reason. the choices of the libraries
felt somewhat arbitrary at first, and the jump between the difficulty of
chapter 6 and chapter 7 is palpable. i honestly would have preferred that the
authors place the "real-world" code as a capstone challenge near the end of the
book, rather than using it as a precursor to parts 3 and 4. i find that it's
much easier to see a pattern if i'm proactively looking rather than analyzing
examples retrospectively. this obviously won't apply to everyone (and i'm sure
many people will prefer this style of teaching), but it is a place where the
organizational structure made me struggle more than i think i would have
otherwise.

part three draws on the commonalities between the libraries in part two to
introduce the reader to purely _algebraic_ structures. they're called
"algebraic" because we can define a series of primitive operations and laws for
their behavior, then combine them algebraically to produce more complex
operations. the authors introduce five patterns, specifically:

1. monoids, which consist of a type, an associative binary operation on that
   type, and an identity element for that operation.
2. functors, which consist of a type constructor and a `map` operation that
   applies a function to the value inside the type constructor.
3. monads, which consist of a type constructor and two operations, `unit` and
   `flatMap`, that correspondingly wrap a value in the type constructor and
apply a function to the unwrapped value inside the type constructor, if
possible.
4. applicatives, which consist of a type constructor and two operations, `unit`
   and `map2`, that correspondingly wrap a value in the type constructor and
apply a function on a pair of applied values inside the type constructor, if
possible.
5. traversables, which consist of a type constructor and an operations
   `traverse` and `sequence` that allows you to traverse the structure,
applying a function to each element and collecting the results.

this section did admittedly retroactively make part 2 feel somewhat less
arbitrary, as the patterns introduced here are present in the libraries
designed in part 2. however, i still think that the presentation made part 2
feel more opaque than it needed to be, and i would have preferred a more
explicit layout of the design patterns earlier on.

part four uses the design patterns discussed in part three to discuss how to
handle "effects" and "mutability" in a purely functional way. it discusses the
design of the `IO` monad, which models input/output effects using a monad to
allow functional programmers to deal with I/O while maintaining referential
transparency, the `ST` monad, which models mutable state in a purely functional
way, and the `Process` monad, which models stream transformations.

at the core of part four is two important concepts:

1. _effects_ are not the same thing as _side effects_. functional programmers
   can maintain referential transparency by modeling the program as a
_description_ of the effects that will occur, rather than the effects
themselves. the responsibility for actually performing the effects is deferred
to a runtime system, but the programmer themselves can reason about the program
as a pure function by representing effects directly as values.
2. every impure procedure can be refactored into a _pure_ core that simply
   computes values, and two impure functions to handle input and output,
respectively. the reason functional programming is valuable, practically, is
because it "pushes" the handling of effects to the outer layer of the program
rather than involving it in the core logic. this allows for better separation
of concerns and makes functions easier to reason about and compose.

overall, despite some organizational choices that i would have made
differently, this book is perhaps the best introduction to functional
programming that i've read. it covers a surprising breadth considering how
short it is and introduces prospective functional programmers to not only
_what_ functional programming is, but _why_ it exists.
