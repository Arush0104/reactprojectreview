import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DSA from "./pages/DSA";
import LLD from "./pages/LLD";
import Progress from "./pages/Progress";

import "./App.css";

function App() {
  // Global state (all questions)
  const [questions, setQuestions] = useState([
  // Arrays
  // ARRAYS & HASHING
// ARRAYS & HASHING
{ id: 1, title: "Two Sum", topic: "Arrays", done: false },
{ id: 2, title: "Best Time to Buy and Sell Stock", topic: "Arrays", done: false },
{ id: 3, title: "Product of Array Except Self", topic: "Arrays", done: false },
{ id: 4, title: "Maximum Subarray", topic: "Arrays", done: false },

// TWO POINTERS
{ id: 5, title: "Valid Palindrome", topic: "Two Pointers", done: false },
{ id: 6, title: "3Sum", topic: "Two Pointers", done: false },
{ id: 7, title: "Container With Most Water", topic: "Two Pointers", done: false },
{ id: 8, title: "Trapping Rain Water", topic: "Two Pointers", done: false },

// SLIDING WINDOW
{ id: 9, title: "Longest Substring Without Repeating Characters", topic: "Sliding Window", done: false },
{ id: 10, title: "Minimum Window Substring", topic: "Sliding Window", done: false },
{ id: 11, title: "Longest Repeating Character Replacement", topic: "Sliding Window", done: false },
{ id: 12, title: "Permutation in String", topic: "Sliding Window", done: false },

// STACK
{ id: 13, title: "Valid Parentheses", topic: "Stack", done: false },
{ id: 14, title: "Min Stack", topic: "Stack", done: false },
{ id: 15, title: "Evaluate Reverse Polish Notation", topic: "Stack", done: false },
{ id: 16, title: "Daily Temperatures", topic: "Stack", done: false },

// BINARY SEARCH
{ id: 17, title: "Binary Search", topic: "Binary Search", done: false },
{ id: 18, title: "Search in Rotated Sorted Array", topic: "Binary Search", done: false },
{ id: 19, title: "Find Minimum in Rotated Sorted Array", topic: "Binary Search", done: false },
{ id: 20, title: "Time Based Key-Value Store", topic: "Binary Search", done: false },

// LINKED LISTS
{ id: 21, title: "Reverse Linked List", topic: "Linked List", done: false },
{ id: 22, title: "Linked List Cycle", topic: "Linked List", done: false },
{ id: 23, title: "Reorder List", topic: "Linked List", done: false },
{ id: 24, title: "Remove Nth Node From End", topic: "Linked List", done: false },

// TREES
{ id: 25, title: "Maximum Depth of Binary Tree", topic: "Trees", done: false },
{ id: 26, title: "Invert Binary Tree", topic: "Trees", done: false },
{ id: 27, title: "Binary Tree Level Order Traversal", topic: "Trees", done: false },
{ id: 28, title: "Binary Tree Maximum Path Sum", topic: "Trees", done: false },

// BST
{ id: 29, title: "Validate Binary Search Tree", topic: "BST", done: false },
{ id: 30, title: "Kth Smallest Element in BST", topic: "BST", done: false },
{ id: 31, title: "Convert Sorted Array to BST", topic: "BST", done: false },

// HEAP
{ id: 32, title: "Kth Largest Element", topic: "Heap", done: false },
{ id: 33, title: "Top K Frequent Elements", topic: "Heap", done: false },
{ id: 34, title: "Merge K Sorted Lists", topic: "Heap", done: false },

// BACKTRACKING
{ id: 35, title: "Subsets", topic: "Backtracking", done: false },
{ id: 36, title: "Combination Sum", topic: "Backtracking", done: false },
{ id: 37, title: "Permutations", topic: "Backtracking", done: false },
{ id: 38, title: "N-Queens", topic: "Backtracking", done: false },

// GRAPHS
{ id: 39, title: "Number of Islands", topic: "Graphs", done: false },
{ id: 40, title: "Clone Graph", topic: "Graphs", done: false },
{ id: 41, title: "Course Schedule", topic: "Graphs", done: false },
{ id: 42, title: "Word Ladder", topic: "Graphs", done: false },

// CACHE
{ id: 43, title: "LRU Cache", topic: "Cache", done: false },
{ id: 44, title: "Rate Limiter", topic: "Cache", done: false },

// LLD
{ id: 45, title: "Parking Lot", topic: "LLD", done: false },
{ id: 46, title: "Tic Tac Toe", topic: "LLD", done: false },
{ id: 47, title: "Vending Machine", topic: "LLD", done: false },
{ id: 48, title: "Elevator System", topic: "LLD", done: false },

// SYSTEM DESIGN
{ id: 49, title: "URL Shortener", topic: "System Design", done: false },
{ id: 50, title: "Chat System", topic: "System Design", done: false },
{ id: 51, title: "Twitter Feed", topic: "System Design", done: false },
{ id: 52, title: "Uber", topic: "System Design", done: false },
{ id: 53, title: "Netflix", topic: "System Design", done: false },

// DISTRIBUTED
{ id: 54, title: "Key-Value Store", topic: "Distributed", done: false },
{ id: 55, title: "Distributed ID Generator", topic: "Distributed", done: false },

// BOOKING
{ id: 56, title: "Movie Ticket Booking", topic: "Booking", done: false },
{ id: 57, title: "Hotel Reservation", topic: "Booking", done: false },

// EXTRA
{ id: 58, title: "Design Traffic Signal System", topic: "Traffic", done: false },
{ id: 59, title: "Design Hotel Management System", topic: "Hotel", done: false },
{ id: 60, title: "Design Restaurant Table Booking", topic: "Restaurant", done: false }
]);

  // Toggle function
  const toggleDone = (id) => {
    const updated = questions.map((q) =>
      q.id === id ? { ...q, done: !q.done } : q
    );
    setQuestions(updated);
  };

  return (
    <Router>
      <div>
        <nav className="nav">
          <Link to="/">DSA</Link>
          <Link to="/lld">LLD</Link>
          <Link to="/progress">Progress</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<DSA questions={questions} toggleDone={toggleDone} />}
          />
          <Route
            path="/lld"
            element={<LLD questions={questions} toggleDone={toggleDone} />}
          />
          <Route
            path="/progress"
            element={<Progress questions={questions} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
