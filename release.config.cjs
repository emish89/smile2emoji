module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'chore', release: null },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features :sparkles:', hidden: false },
            { type: 'fix', section: 'Bug Fixes :bug:', hidden: false },
            { type: 'docs', section: 'Documentation :memo:', hidden: false },
            { type: 'perf', section: 'Performance :runner:', hidden: false },
            { type: 'refactor', section: 'Refactor :hammer_and_wrench:', hidden: false },
            { type: 'style', section: 'Code Style :art:', hidden: false },
            { type: 'chore', section: 'Chore :gear:', hidden: true },
            { type: 'ci', section: 'CI/CD', hidden: true },
          ],
        },
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  branches: [
    'master',
    {
      name: 'beta',
      prerelease: true,
    },
  ],
};
