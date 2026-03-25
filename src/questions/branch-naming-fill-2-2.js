export default {
  id: 'branch-naming-fill-2-2',
  type: 'fill-blank',
  category: 'git',
  question: 'Complete this summary from "Git Branch Naming": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Lullabot uses double dashes (--) to separate the ticket ID from the description. Forward slashes are avoided because they can cause confusion with hierarchical branch prefixes in Git. This follows the ADR "Git Branch Naming".',
  source: 'https://architecture.lullabot.com/adr/20220920-git-branch-naming/',
};
