# react-repo-card-v2

The `RepoCard` component is designed to display GitHub repository information in a clean, visually appealing card format. It supports both light and dark modes and can show various repository details, including stars, forks, license information, and last update time.

## Features

- Display GitHub repository details.
- Customizable to show/hide specific information.
- Supports dark and light themes.
- Responsive design.
- Direct integration with GitHub repository API data.

## Installation

```bash
npm install react-repo-card-v2
# or
yarn add react-repo-card-v2
```

## Usage

First, import the `RepoCard` component in your React project:

```javascript
import { RepoCard } from 'react-repo-card-v2';
```

## Direct API Use

The RepoCard component is designed to seamlessly integrate with the GitHub Repository API. You can directly pass the JSON response from the GitHub API to the repository prop of the RepoCard. This makes it incredibly easy to display repository information fetched from GitHub.

For example, after fetching data from the GitHub API:

```jsx
<RepoCard
  repository={{
    name: 'Example Repository',
    description: 'This repository is an example of how to use the RepoCard component.',
    language: 'JavaScript',
    updated_at: '2023-01-01T00:00:00Z',
    html_url: 'https://github.com/yourusername/your-repository',
    license: { name: 'MIT' },
    open_issues_count: 10,
    stargazers_count: 100,
    forks_count: 20,
  }}
  showCodeLanguage={true}
  showLicense={true}
  showIssues={true}
  showStars={true}
  showForks={true}
  showUpdatedAt={true}
  showCodeColorBar={true}
  repoInfoColor="grey"
  darkMode={false}
/>
```

## Props

| Prop               | Type      | Description                                                                               | Default  |
| ------------------ | --------- | ----------------------------------------------------------------------------------------- | -------- |
| `repository`       | `Object`  | The JSON response object from the GitHub repository API. No need for manual data mapping. | -        |
| `showCodeLanguage` | `boolean` | Show the primary language of the repository.                                              | `true`   |
| `showLicense`      | `boolean` | Show the license information.                                                             | `true`   |
| `showIssues`       | `boolean` | Show the number of open issues.                                                           | `true`   |
| `showStars`        | `boolean` | Show the star count.                                                                      | `true`   |
| `showForks`        | `boolean` | Show the fork count.                                                                      | `true`   |
| `showUpdatedAt`    | `boolean` | Show the last update timestamp.                                                           | `true`   |
| `showCodeColorBar` | `boolean` | Show a color bar representing the code language.                                          | `true`   |
| `repoInfoColor`    | `string`  | Text color for the repository information.                                                | `'grey'` |
| `darkMode`         | `boolean` | Enable dark mode for the card.                                                            | `false`  |

## Customization

You can customize the appearance of the `RepoCard` by using the `repoInfoColor` and `darkMode` props. Additionally, you can choose which pieces of information to display by setting the corresponding props to `true` or `false`.

## Contributing

We welcome contributions to improve this component! Please feel free to submit issues or pull requests to our [GitHub repository]([https://github.com/yourusername/your-repository](https://github.com/a3510377/react-repo-card-v2/)).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
