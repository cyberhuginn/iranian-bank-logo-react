# iranian-bank-logo-react

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

Iranian bank logos for **React** and **Next.js**.  
Supports **client-only rendering**, customizable **size**, and works out-of-the-box with Next.js.

![med.jpg](https://raw.githubusercontent.com/cyberhuginn/iranian-bank-logo-react/refs/heads/main/med.jpg)
---

## repo

Github: https://github.com/cyberhuginn/iranian-bank-logo-react.git  
Npm: https://www.npmjs.com/package/iranian-bank-logo-react

---

## Features

- ✅ Ready for React and Next.js
- ✅ Client-side only (SSR safe)
- ✅ Supports dynamic icon size
- ✅ Easy to use
- ✅ TypeScript compatible (declaration included)

---

## Installation

```bash
  npm install iranian-bank-logo-react
```

or

```bash
  yarn add iranian-bank-logo-react
```

---

## Usage

```jsx
import {IranianBank} from "iranian-bank-logo-react";

export default function App() {
    return (
        <div>
            <IranianBank name="ir-mellat" size={40}/>
            <IranianBank name="ir-pasargad" size={30}/>
        </div>
    );
}
```

### Props

| Prop      | Type   | Default | Description                                      |
|-----------|--------|---------|--------------------------------------------------|
| `name`    | string | —       | The bank icon name (file name in `icons` folder) |
| `size`    | number | 20      | Width & height in pixels                         |
| `...rest` | any    | —       | Any other `<img>` attributes                     |

> Note: All icons are assumed to be square.

---

## Adding New Icons

1. Place your SVG in `icons/` folder.
2. Run the generate script:

```bash
  node scripts/build-icons.js
```

3. Build the package:

```bash
  npm run build
```

---

## Development

- Build:

```bash
  npm run build
```

- Watch mode:

```bash
  npm run dev
```

- Copy icons is automatic after build (see `copy-icons` script).

---

## TypeScript

Declaration file included, so you can use it directly in TS projects:

```ts
import {IranianBank} from "iranian-bank-logo-react";

<IranianBank name = "ir-mellat"
size = {40}
/>;
```

---

## License

This project is licensed under the ISC License.

