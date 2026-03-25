export default {
  id: '20240924-11ty-adr-coverage-order-v7',
  type: 'order',
  category: 'general',
  question: 'Order a practical workflow for applying ADR "11ty Adr".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'This question is based on the ADR "11ty Adr". Use the ADR source link to review the exact recommendation and context. This reinforces the ADR "11ty Adr".',
  source: 'https://architecture.lullabot.com/adr/20240924-11ty-adr/',
};
