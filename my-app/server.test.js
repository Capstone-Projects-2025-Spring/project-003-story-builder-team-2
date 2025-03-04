import request from 'supertest';  // Supertest for making requests
import { app, server } from '../server.js';    // Import your Express app
import axios from 'axios';
import { OpenAI } from 'openai';

describe('GET /', () => {
  it('should return a 200 status and "testing!" message', async () => {
    const response = await request(app).get('/'); // Send a GET request to the root route

    // Check if the response status is 200
    expect(response.status).toBe(200);

    // Check if the response body contains the string "testing!"
    expect(response.text).toBe('testing!');
  });
});

/*// Mock the OpenAI API client
jest.mock('openai');

describe('POST /api/openai', () => {
  it('should return a successful response with a message', async () => {
    // Setup the mock response from OpenAI API
    const mockResponse = {
      choices: [{ message: { content: 'This is a mock response.' } }],
    };

    // Create a mock instance of OpenAI that returns the mock response
    const mockOpenAIInstance = {
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue(mockResponse),
        },
      },
    };

    // Mock OpenAI constructor to return mockOpenAIInstance
    OpenAI.mockImplementation(() => mockOpenAIInstance);

    // Simulate a POST request to the endpoint
    const response = await request(app)
      .post('/api/openai')
      .send({ prompt: 'Test prompt' })
      .expect('Content-Type', /json/)
      .expect(200);

    // Assert that the response contains the mocked message
    expect(response.body.message).toBe('This is a mock response.');
  });

  it('should handle errors correctly', async () => {
    // Create a mock instance of OpenAI for error case
    const mockOpenAIInstance = {
      chat: {
        completions: {
          create: jest.fn().mockRejectedValue(new Error('API Error')),
        },
      },
    };

    // Mock OpenAI constructor to return mockOpenAIInstance
    OpenAI.mockImplementation(() => mockOpenAIInstance);

    const response = await request(app)
      .post('/api/openai')
      .send({ prompt: 'Test prompt' })
      .expect('Content-Type', /json/)
      .expect(500);

    // Assert that the response contains the expected error message
    expect(response.body.error).toBe('Failed to fetch completion');
  });
});*/



// Ensure the server is properly closed after tests
afterAll(async () => {
  await server.close(); // Close the server after the tests have completed
});