# Hooks

Put your `hooks` using brand new composition API components. You can use `$/hooks/` alias to access to all components in this folder.

```ts
// hooks/useCounter.ts

export function useMyHook() {
    // your awesome hook
}
```

```tsx
import { useMyHook } from "$/hooks/useCounter"

function MyComponent() {
    const { count, add } = useMyHook()

    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>Add</button>
        </div>
    )
}
```
