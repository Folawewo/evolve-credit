
# Evolve Credit SDK

Easily integrate lending, savings, and recovery services.

# Evolve Credit SDK

[![npm version](https://img.shields.io/npm/v/evolve-credit-sdk.svg)](https://www.npmjs.com/package/evolve-credit-sdk)

The Evolve Credit SDK allows developers to easily integrate lending, savings, and recovery services provided by the Evolve Credit platform into their applications.

## Installation

You can install the Evolve Credit SDK using npm:

```
npm install evolve-credit-sdk
```

```
const EvolveCreditSDK = require('evolve-credit-sdk');

const sdk = new EvolveCreditSDK('your-api-key', 'https://api.evolvecredit.co');

Use the SDK methods to interact with the Evolve Credit API 🚀🚀

sdk.getUser(userId)
  .then(user => {
    // handle user data
  })
  .catch(error => {
    // handle errors
  });

```


## API Reference

#### Retrieve user information

```
  GET ${this.apiUrl}/users/${userId}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `getUser(userId)` | `string` | **Required**. Your API key |

#### Create a loan application

```
  GET ${this.apiUrl}/loan-applications
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `createLoanApplication(userId, loanAmount)`      | `string, number` | **Required**. userId, loanAmount |

#### Update user savings account

```
  GET ${this.apiUrl}/savings-accounts/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `updateSavingsAccount(userId, amount)`      | `string, number` | **Required**. userId, loanAmount |

#### Recover a loan

```
  GET ${this.apiUrl}/loans/${loanId}/recover
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `recoverLoan(loanId, amount)`      | `string, number` | **Required**. userId, loanAmount |


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


Please adhere to this project's `code of conduct - What it would look like if Evolve released an SDK`.

