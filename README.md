# Unhandled Promise Rejection: Missing Error Handling in Node.js
This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `bug.js` file contains code that lacks proper error handling for asynchronous operations, leading to an unhandled rejection.  The `bugSolution.js` file provides a corrected version with robust error handling.

## Problem
In Node.js, if an asynchronous operation (like a database query or network request) fails and doesn't have error handling, it can result in an unhandled promise rejection.  This can be difficult to debug and can crash your application.  The original code lacks an error listener in the server.on('error', ...) block.

## Solution
The solution involves implementing comprehensive error handling using `.catch()` for promises or a comprehensive `try...catch` block for other asynchronous operations.  Always handle potential errors to prevent unexpected crashes and ensure application stability.

## Setup
1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to observe the unhandled promise rejection.
4. Run `node bugSolution.js` to see the corrected version with proper error handling.