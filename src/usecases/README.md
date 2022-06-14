# Use cases

Add your bussiness logic here and use it along the project. You can use `$/usecases/` alias to access to code in this folder.

```ts
// usecases/findUsers

export function findUserByNickname(id: string) {
    // ... MAGIC!
}
```

```tsx
// some/other/file.ts

import { findUserByNickname } from "$/usecases/findUsers"

function MyComponent() {
    async function fetchUser() {
        const user = await findUserByNickname("some-nickname")

        // ... MAGIC!
    }

    return (
        <div>
            <button onClick={fetchUser}>Fetch</button>
        </div>
    )
}
```
