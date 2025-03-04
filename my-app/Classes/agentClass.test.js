import { jest } from '@jest/globals';
import Agent from './agentClassgent';


describe('Agent Class - generateChapter Method', () => {
    let mockAIInstance, agent;
    
    beforeEach(() => {
        mockAIInstance = {
            generateText: jest.fn().mockResolvedValue({ text: 'Generated chapter content' })
        };
        agent = new Agent('Fantasy Writer', mockAIInstance);
    });
    
    test('should return an empty string on error', async () => {
        mockAIInstance.generateText.mockRejectedValue(new Error('API failure'));
        const result = await agent.generateChapter('Once upon a time', 'A magical forest');
        expect(result).toBe('');
    });
});
