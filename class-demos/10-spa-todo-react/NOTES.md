Basic Javascript:
- Ternary operator
- Array destructuring
    - const numbers = [10, 20, 30];
    - const [first, second, third] = numbers;
    - Object: const person = {
                    firstName: "John",
                    lastName: "Doe",
                    age: 50
                };
                // Destructuring
                let {firstName, lastName, age} = person;
- Array.map


Vite:
- Dev server, Transpiler (esbuild), bundler (one file)
- Transpilation (translating code from one language to another). 
    - React goes from JSX to JS
    - Vite is a suit 
- npm create vite@latest


React Basics:
- UI = f(state)
    - Make UI declarative rather than imperative
        - You don’t tell the browser how to update — you just state what the UI should be.
- React "monitors" state, and when it detects a change it:
    - Re-runs your component function.
    - Compares the new UI to the old UI (via Virtual DOM).
    - Applies only the minimal changes to the actual browser DOM.
- With React you create "components" (functions that return UI - represented as JSX)
    - What is JSX? It is basically syntactic sugar for all of those document.createElement calls.
- Props: Props let data flow down from parent -> child. Try to keep state in the parent.
    - This can get a little wonky
- Create "state" with "useState". Change state with the set functions. React will rerun the component whevever you call setWhateverState.
    - "hooks": useState is for state, and useEffect to run code when the component renders / updates
- "Virtual DOM": React avoids recreating the DOM after every change by keeping track of a virtual DOM, and only updates what changed in the real browser DOM.


Things to do with React:
- Refer to variables in the JSX HTML portions using {}
- Iterate in the JSX that you return using map
    - Conditionally add HTML using ternary operators
    ```javascript
    <ul>
      {people.map((person) =>
        person.online ? (
          <OnlineUser key={person.name} name={person.name} />
        ) : (
          <OfflineUser key={person.name} name={person.name} />
        )
      )}
    </ul>
    ```
- Conditional pattern: {total === 0 && <p>Your cart is empty.</p>} for conditional html.
    - In JavaScript, the && operator returns:
        - The second value if the first value is truthy
        - The first value if the first value is falsy
- Importing JSON: `import world from "./data/world.json";`
- useEffect: run code on load (blank [] as second argument), or pass in a list of state which will call useEffect whenever they change.
    - useEffect(()=>{},[]);