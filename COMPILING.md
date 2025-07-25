# Compiling TypeScript Files
To compile TypeScript files, follow these steps:
1. **Open a terminal** in the directory where your TypeScript files are located.
2. **Run the TypeScript compiler** using the following command:
   ```bash
   tsc <filename>.ts
   ```
   Replace `<filename>` with the name of your TypeScript file.
3. **Check for errors**: If there are any syntax errors or type errors in your TypeScript code, the compiler will display them in the terminal.
4. **Output**: If the compilation is successful, a JavaScript file with the same name as your TypeScript file will be created in the same directory.
5. **Run the compiled JavaScript**: You can run the generated JavaScript file using Node.js:
   ```bash
   node <filename>.js
   ```
   This will execute the compiled code in the Node.js environment.