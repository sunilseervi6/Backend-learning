# 🎯 EJS & Express.js Learning Notes

This document captures my learnings while exploring **EJS (Embedded JavaScript)** with **Express.js** for server-side rendering in Node.js applications.

---

## 📌 What is EJS?

**EJS** is a simple templating engine that allows you to embed JavaScript directly into your HTML using `<%= %>` syntax. It helps build dynamic HTML pages by combining logic with view templates.

---

## 🧠 Why Use EJS?

- ✅ To insert dynamic values into HTML
- ✅ To run logic like loops and conditions in templates
- ✅ To keep code clean with reusable layouts (partials)
- ✅ To separate server logic from presentation
- ✅ To avoid messy HTML string-building in JavaScript

---

npm init -y
npm install express ejs


## 1. Why do we use app.set("views", path.join(...))?

By default, Express looks for views in a views/ folder relative to where the server runs. This line ensures that Express always correctly finds the views folder even if you run the server from a different location (like parent folder).

Without it? You might get an error if Express can't find the EJS files.

## 🧪 EJS Interpolation Syntax

| Syntax           | Purpose                        |
|------------------|--------------------------------|
| `<%= value %>`   | Output escaped value           |
| `<%- value %>`   | Output unescaped/raw HTML      |
| `<% code %>`     | Execute JS logic (no output)   |
| `<%# comment %>` | Add EJS-only comment           |

### 🔹 Examples:
```ejs
<h3><%= 1 + 2 %></h3>                     <!-- Outputs: 3 -->
<h3><%= ["hello", "bonjour"][1] %></h3>  <!-- Outputs: bonjour -->
<h3><%= "sunil".toUpperCase() %></h3>    <!-- Outputs: SUNIL -->


