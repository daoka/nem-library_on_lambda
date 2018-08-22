# NEMLibrary on lambda

This is the sample, using NEMLibrary on AWS lambda.

## Requirement

- AWS Lambda runtime: Node.js 8.10
- apex
  - http://apex.run/

## How to run it

- Setting AWS credentials
  - see: http://apex.run/
- Setting following environment variable on `functions/SendXem/function.json`
```JSON
"environment": {
    "PRIVATE_KEY": "YOUR_PRIVATE_KEY",
    "TO_ADDRESS": "DESTINATION_ADDRESS"
}
```
- Deploy with follwing command
```sh
% apex deploy
```
- Run with following command
```sh
% echo -n '{}' | apex invoke SendXem
```
