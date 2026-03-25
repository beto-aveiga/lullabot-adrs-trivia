export default {
  id: 'branch-naming',
  type: 'multiple-choice',
  category: 'git',
  question: 'What format does Lullabot recommend for feature branch names?',
  options: [
    'feature/ticket-id/short-description',
    '[ticket-id]--[short-description]',
    '[ticket-id]-[short-description]',
    'ticket-id_short-description',
  ],
  correctIndex: 1,
  explanation:
    'Lullabot uses double dashes (--) to separate the ticket ID from the description. Forward slashes are avoided because they can cause confusion with hierarchical branch prefixes in Git.',
  source: 'https://architecture.lullabot.com/adr/20220920-git-branch-naming/',
};
