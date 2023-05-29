const axios = require('axios');

class EvolveCreditSDK {
  constructor(apiKey, apiUrl) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  // retrieve user information
  async getUser(userId) {
    const endpoint = `${this.apiUrl}/users/${userId}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };

    try {
      const response = await axios.get(endpoint, { headers });
      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve user information');
    }
  }

  // create a loan application
  async createLoanApplication(userId, loanAmount) {
    const endpoint = `${this.apiUrl}/loan-applications`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
    const data = {
      userId,
      loanAmount
    };

    try {
      const response = await axios.post(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create loan application');
    }
  }

  // update user savings account
  async updateSavingsAccount(userId, amount) {
    const endpoint = `${this.apiUrl}/savings-accounts/${userId}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
    const data = {
      amount
    };

    try {
      const response = await axios.put(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update savings account');
    }
  }

  // recover a loan
  async recoverLoan(loanId, amount) {
    const endpoint = `${this.apiUrl}/loans/${loanId}/recover`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
    const data = {
      amount
    };

    try {
      const response = await axios.post(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      throw new Error('Failed to recover loan');
    }
  }
}

module.exports = EvolveCreditSDK;
