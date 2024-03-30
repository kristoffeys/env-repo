# Env-Wizard
This package helps you manage your environment variables when setting up a project. It reads from a source .env file (default: `.env.example`), prompts you for values for any undefined variables, and writes the results to a target .env file (default: `.env`). This is especially useful when setting up a new environment or when adding new variables to your environment.

## Features
- Reads from a source .env file
- Prompts for values for any undefined variables
- Writes the results to a target .env file

## Installation
You can install env-wizard via npm:
```
npm install env-wizard
```

## Usage
Here's how you can use the env-wizard CLI:
```
env-wizard -s .env.example -t .env
```

In this example, env-wizard reads from `.env.example`, prompts for values for any undefined variables, and writes the results to `.env`.

If you don't provide the `-s` & `-t` parameters, source defaults to `.env.example` & target defaults to `.env`

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
Env wizard is licensed under the MIT license.
