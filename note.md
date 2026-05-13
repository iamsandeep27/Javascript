## JavaScript Data Types

### Primitive Types

JavaScript has 7 primitive data types:

- `String`
- `Number`
- `Boolean`
- `null`
- `undefined`
- `Symbol`
- `BigInt`

---

### Non-Primitive (Reference) Types

These data types are reference types:

- `Array`
- `Object`
- `Function`

---

### Example

```js
// Primitive Types
let name = "John";          // String
let age = 25;               // Number
let isActive = true;        // Boolean
let emptyValue = null;      // null
let notAssigned;            // undefined
let uniqueId = Symbol();    // Symbol
let bigNumber = 123n;       // BigInt

// Reference Types
let fruits = ["Apple", "Banana"]; // Array
let user = { name: "John" };      // Object
function greet() {                // Function
  console.log("Hello");
}
