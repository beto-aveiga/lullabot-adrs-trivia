export default {
  id: 'branch-naming-scenario',
  type: 'multiple-choice',
  category: 'git',
  question: 'Why does the ADR prefer `[ticket-id]--[short-description]` over slash-based naming?',
  options: [
    'Double dashes produce shorter branch names.',
    'It avoids confusion with hierarchical branch prefixes created by slashes.',
    'Git does not allow slashes in remote branches.',
    'GitHub Actions only runs on branches with dashes.',
  ],
  correctIndex: 1,
  explanation: 'Using `--` avoids ambiguity that slash-separated names introduce in some branch workflows and tooling expectations.',
  source: 'https://architecture.lullabot.com/adr/20220920-git-branch-naming/',
};
