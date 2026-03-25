export default {
  id: 'branch-naming-match-1',
  type: 'matching',
  category: 'git',
  question: 'Match each ADR element to its purpose for "Git Branch Naming".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Lullabot uses double dashes (--) to separate the ticket ID from the description. Forward slashes are avoided because they can cause confusion with hierarchical branch prefixes in Git. This follows the ADR "Git Branch Naming". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220920-git-branch-naming/',
};
