```javascript
// pages/index.js
export default async function Home() {
  const component = await Promise.resolve(import('./my-component'));
  const MyComponent = component.default;
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <MyComponent/>
    </div>
  );
}

// my-component.js
export default function MyComponent(){
  return <div>This is MyComponent</div>;
}
```