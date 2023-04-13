import React from 'react';

const Blog = () => {
  return (
    <div>
      {/* question no 1 */}
      <h1 className="text-3xl font-medium">Q.1. When we use context Api? </h1>
      <p className="mt-2 text-md">
        Answer: When some data needs to be accessible by many components at
        different nesting levels.If we want to only avoid passing some props
        throw many levels ,components composition is often similar solution
        contain context.
      </p>

      {/* question no 2 */}
      <h1 className="text-3xl font-medium">Q.2. What is custom hook? </h1>
      <p className="mt-2 text-md">
        Answer: A custom hook is a special JavaScript function whose name starts
        with 'use' and can be used to call other hooks.
      </p>

      {/* question no 3 */}
      <h1 className="text-3xl font-medium">Q.3. What is the purpose useref?</h1>
      <p className="mt-2 text-md">
        Answer: The useRef Hook allows you to persist values between renders. It
        can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.
      </p>

      {/* question no 4 */}
      <h1 className="text-3xl font-medium">Q.4. What is useMemo?</h1>
      <p className="mt-2 text-md">
        Answer: useMemo is a React Hook that lets you cache the result of a
        calculation between re-renders.
      </p>
    </div>
  );
};

export default Blog;