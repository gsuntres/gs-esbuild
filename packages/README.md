## Overview

Add timestamps to your builds. This plugin was created to add a timestamp whenever a build happens, which is not only in the initial build, but also in watch mode.

## Install

```bash
npm i -D @gs-esbuild/esbuild-plugin-timestamp
```

## Use

In the entry file, by default this is `src/index.jsx`, add the following line:

```
export const build_timestamp = __BUILD_TIMESTAMP__
```

Now you can import this plugin and use it, like so:

```js
import timestamp from '@gs-esbuild/esbuild-plugin-timestamp'

...

plugins: [ timestamp() ]

...
```

Now you simply access the build timestamp of your library by simply importing it:

```js
import { build_timestamp as myLibTimestamp } from 'my-lib'
```