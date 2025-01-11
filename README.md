# Next.js 15 Dynamic Import Error

This repository demonstrates a bug in Next.js 15 where using a dynamic import within a component that uses `async/await` can throw an error.

## Bug Description

When using a dynamic import inside an async function within a Next.js 15 component, the application may throw an error related to the import failing.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

The solution involves wrapping the dynamic import in a `Promise.resolve()` to ensure proper execution.