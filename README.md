
# Node js Server - Connect.log file Download for WebIQ

## Overview

NJServerLogDown is a Node.js application designed to allow users to download log files from the WebIQ server. The server is built using Express.js and supports CORS for cross-origin requests.

## Download and Run

You can download and run the `my-server.exe` OR modify the code and make your executable server.

## WebIQ Applications

For the WebIQ applications, you need to download and install the `lib-jquery3` from [Smart HMI](https://www.smart-hmi.com). You need to log in and download it from the User area and install the package in your application to use the WebIQ sample code.

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
   git clone https://github.com/Ariaparsboy/NJServerLogDown.git
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

   The server will start running at `http://localhost:3000`.

2. To download the log file, make a GET request to:

   ```
   http://localhost:3000/download-log
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
4. To create a Linux executable, use:

   ```bash
   pkg . --targets node14-linux-x64
   ```
   
## Running on Linux

1. Transfer the generated Linux executable to your Linux machine.

2. Set executable permissions:

   ```bash
   chmod +x my-server-linux
   ```

3. Run the executable:

   ```bash
   ./my-server-linux
   ```

   The server will start running at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
