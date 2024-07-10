# Node js Server - Connect.log file Download for WebIQ

## Overview


## Features

- Download log files from the server
- Simple setup and usage
- Can be packaged as a standalone executable

## Project Structure

```
NJServerLogDown/
├── node_modules/
├── package.json
├── server.js
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) installed
- [pkg](https://github.com/vercel/pkg) installed globally

### Installation

1. Clone the repository:

   ```bash
   cd NJServerLogDown
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```


2. To download the log file, make a GET request to:

   ```
   ```

## Creating an Executable

You can create a standalone executable for the server using `pkg`.

1. Ensure `pkg` is installed globally:

   ```bash
   npm install -g pkg
   ```

2. Create the executable:

   ```bash
   pkg .
   ```

   This will generate an executable for your platform in the project directory.

3. To specify a target platform, use the `--targets` option. For example, to create a Windows executable:

   ```bash
   pkg . --targets node14-win-x64
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
