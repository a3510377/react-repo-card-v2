import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react';
import RepoCard, { RepoCardProps } from '.';

export const RepoCardExample: StoryObj<RepoCardProps> = (
  args: JSX.IntrinsicAttributes & RepoCardProps,
) => (
  <div
    style={{
      position: 'absolute',
      margin: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 400,
    }}
  >
    <RepoCard {...args} />
  </div>
);

RepoCardExample.args = {
  darkMode: false,
  showUpdatedAt: true,
  showCodeLanguage: true,
  showIssues: true,
  showLicense: true,
  showStars: true,
  showForks: true,
  showCodeColorBar: true,
  repoInfoColor: '#a0a0a0',
  repository: {
    id: 518780742,
    node_id: 'R_kgDOHuv3Rg',
    name: 'mc-cloud-town.github.io',
    full_name: 'mc-cloud-town/mc-cloud-town.github.io',
    private: false,
    owner: {
      login: 'mc-cloud-town',
      id: 110610705,
      node_id: 'O_kgDOBpfJEQ',
      avatar_url: 'https://avatars.githubusercontent.com/u/110610705?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mc-cloud-town',
      html_url: 'https://github.com/mc-cloud-town',
      followers_url: 'https://api.github.com/users/mc-cloud-town/followers',
      following_url:
        'https://api.github.com/users/mc-cloud-town/following{/other_user}',
      gists_url: 'https://api.github.com/users/mc-cloud-town/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mc-cloud-town/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/mc-cloud-town/subscriptions',
      organizations_url: 'https://api.github.com/users/mc-cloud-town/orgs',
      repos_url: 'https://api.github.com/users/mc-cloud-town/repos',
      events_url: 'https://api.github.com/users/mc-cloud-town/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mc-cloud-town/received_events',
      type: 'Organization',
      site_admin: false,
    },
    html_url: 'https://github.com/mc-cloud-town/mc-cloud-town.github.io',
    description: 'cloudtown-website',
    fork: false,
    url: 'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io',
    forks_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/forks',
    keys_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/teams',
    hooks_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/hooks',
    issue_events_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/events',
    assignees_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/tags',
    blobs_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/languages',
    stargazers_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/stargazers',
    contributors_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/contributors',
    subscribers_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/subscribers',
    subscription_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/subscription',
    commits_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/merges',
    archive_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/downloads',
    issues_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/labels{/name}',
    releases_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/mc-cloud-town/mc-cloud-town.github.io/deployments',
    created_at: '2022-07-28T09:23:32Z',
    updated_at: '2024-02-16T11:32:34Z',
    pushed_at: '2024-01-12T14:00:30Z',
    git_url: 'git://github.com/mc-cloud-town/mc-cloud-town.github.io.git',
    ssh_url: 'git@github.com:mc-cloud-town/mc-cloud-town.github.io.git',
    clone_url: 'https://github.com/mc-cloud-town/mc-cloud-town.github.io.git',
    svn_url: 'https://github.com/mc-cloud-town/mc-cloud-town.github.io',
    homepage: 'https://mc-cloud-town.github.io/',
    size: 31024,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
};

const story: Meta = {
  title: 'RepoCard',
  component: RepoCard,
};

export default story;
