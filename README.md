# Image Capture Browser SDK

This project is set up as a monorepo. The SDK is split into multiple packages, located inside the `/packages` directory.

The demo app is a separate package located inside the `/apps` directory.

## Required tools:

1. NodeJS LTS (18.x)

   - Prefer using [`nvm`](https://github.com/nvm-sh/nvm) on dev machines:

   ```sh
   nvm install --lts
   nvm use --lts
   ```

   - [alternative installation methods](https://nodejs.org/en/download)

2. `pnpm`

   - alternative package manager to `npm`
   - easiest to install using `npm install -g pnpm`
   - [alternative installation methods](https://pnpm.io/installation)

3. `conan v1`

   - can be installed on MacOS using [homebrew](https://brew.sh/):

   ```sh
   brew install conan@1
   ```

   - [alternative installation methods](https://docs.conan.io/1/installation.html#)

4. `cmake`

   - can be installed on MacOS using [homebrew](https://brew.sh/):

   ```sh
   brew install cmake
   ```

   - [alternative installation methods](https://cmake.org/install/)

5. `ninja`

   - can be installed on MacOS using [homebrew](https://brew.sh/):

   ```sh
   brew install ninja
   ```

   - [alternative installation methods](https://github.com/ninja-build/ninja/wiki/Pre-built-Ninja-packages)

## Installation instructions:

Install packages:

```sh
pnpm install
```

Run the build process, this will configure and build all the packages in the monorepo:

```sh
pnpm run build
```

If the installation fails, try using:

```sh
pnpm run build --force
```

To run the demo app, navigate to `/apps/example-solidjs` and run:

```sh
pnpm run dev
```

As the demo app dev server is unstable, you can serve the built `/dist` directory after running `pnpm run build` using:

```sh
pnpm run serve
```

Additionally, each package can be built individually by navigating to its folder and running the corresponding scripts.
