export default {
  id: 'access-unpublished',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'How does the access_unpublished module grant access to protected content?',
  options: [
    'It creates a password-entry form on the node page',
    'It generates time-limited, per-node token URLs',
    'It adds an IP-allowlist field to each content type',
    'It assigns a special "reviewer" role to anonymous users',
  ],
  correctIndex: 1,
  explanation:
    'Access Unpublished grants access through time-limited, per-node tokens embedded in URLs. Anyone with the link gets access for the token\'s validity period—no Drupal account required. Tokens can be revoked at any time, keeping the solution simple and auditable.',
  source: 'https://architecture.lullabot.com/adr/20260313-use-access-unpublished/',
};
