import { FC } from 'react';
import styled from 'styled-components';

import { CodeIcon, ForkIcon, IssueIcon, LicenseIcon, StarIcon } from './icon';
import { LangColor } from './constants';
import { TMinimalRepository } from './types';

const RepoContainer = styled.div<{ $darkMode?: boolean }>`
  border: 1px solid ${(props) => (props.$darkMode ? '#343a40' : '#e1e4e8')};
  background-color: ${(props) => (props.$darkMode ? '#282c34' : 'white')};
  color: ${(props) => (props.$darkMode ? 'white' : 'black')};
  border-radius: 6px;
  padding: 16px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 5px 0
      ${(props) => (props.$darkMode ? '#343a40' : '#e1e4e8')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const RepoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
`;

const RepoSubtitle = styled.div`
  font-size: 16px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RepoInfoContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const RepoInfoText = styled.span<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || 'black'};
  margin-left: 4px;
`;

const LastUpdateText = styled(RepoInfoText)`
  margin: 0;
`;

const CodeLanguageColorBar = styled.div<{ $langColor?: string }>`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.$langColor || 'transparent'};
  position: relative;
`;

const UpdatedAtContainer = styled.div`
  font-size: 12px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

/**
 * The props for the RepoCard component.
 */
export interface RepoCardProps {
  repository: TMinimalRepository;
  showCodeLanguage?: boolean;
  showLicense?: boolean;
  showIssues?: boolean;
  showStars?: boolean;
  showForks?: boolean;
  showUpdatedAt?: boolean;
  showCodeColorBar?: boolean;
  repoInfoColor?: string;
  darkMode?: boolean;
}

/**
 * The RepoCard component displays information about a GitHub repository.
 * @param repository {TMinimalRepository} - The repository object to display.
 * @param showCodeLanguage {boolean} - Whether to show the repository's code language.
 * Defaults to true.
 * @param showLicense {boolean} - Whether to show the repository's license.
 * Defaults to true.
 * @param showIssues {boolean} - Whether to show the repository's open issues count.
 * Defaults to true.
 * @param showStars {boolean} - Whether to show the repository's star count.
 * Defaults to true.
 * @param showForks {boolean} - Whether to show the repository's fork count.
 * Defaults to true.
 * @param showUpdatedAt {boolean} - Whether to show the repository's last updated date.
 * Defaults to true.
 * @param showCodeColorBar {boolean} - Whether to show the code language color bar.
 * Defaults to true.
 * @param repoInfoColor {boolean} - The color of the repository information text.
 * Defaults to 'grey'.
 * @param darkMode {boolean} - Whether to use dark mode.
 * Defaults to false.
 * @constructor - The constructor for the RepoCard component.
 */
export const RepoCard: FC<RepoCardProps> = ({
  repository,
  showCodeLanguage = true,
  showLicense = true,
  showIssues = true,
  showStars = true,
  showForks = true,
  showUpdatedAt = true,
  showCodeColorBar = true,
  repoInfoColor = 'grey',
  darkMode = false,
}: RepoCardProps) => {
  const updatedAt = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(repository.updated_at || new Date()));

  return (
    <RepoContainer $darkMode={darkMode}>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        <RepoTitle>{repository.name}</RepoTitle>
        <RepoSubtitle>
          {repository.description || 'No description provided.'}
        </RepoSubtitle>
        {showUpdatedAt && (
          <UpdatedAtContainer>
            <LastUpdateText $textColor={repoInfoColor}>
              Updated: {updatedAt}
            </LastUpdateText>
          </UpdatedAtContainer>
        )}
        {(showCodeLanguage ||
          showLicense ||
          showIssues ||
          showStars ||
          showForks) && (
          <RepoInfoContainer>
            {showCodeLanguage && (
              <RepoInfo>
                <CodeIcon fill={repoInfoColor} />
                <RepoInfoText $textColor={repoInfoColor}>
                  {repository.language || 'Unknown'}
                </RepoInfoText>
              </RepoInfo>
            )}
            {showLicense && (
              <RepoInfo>
                <LicenseIcon fill={repoInfoColor} />
                <RepoInfoText $textColor={repoInfoColor}>
                  {repository.license?.name || 'No license specified'}
                </RepoInfoText>
              </RepoInfo>
            )}
            {showIssues && (
              <RepoInfo>
                <IssueIcon fill={repoInfoColor} />
                <RepoInfoText $textColor={repoInfoColor}>
                  {repository.open_issues_count}
                </RepoInfoText>
              </RepoInfo>
            )}
            {showStars && (
              <RepoInfo>
                <StarIcon fill={repoInfoColor} />
                <RepoInfoText $textColor={repoInfoColor}>
                  {repository.stargazers_count}
                </RepoInfoText>
              </RepoInfo>
            )}
            {showForks && (
              <RepoInfo>
                <ForkIcon fill={repoInfoColor} />
                <RepoInfoText $textColor={repoInfoColor}>
                  {repository.forks_count}
                </RepoInfoText>
              </RepoInfo>
            )}
          </RepoInfoContainer>
        )}
        {showCodeColorBar && repository.language && (
          <CodeLanguageColorBar
            $langColor={LangColor[repository.language] || void 0}
          />
        )}
      </a>
    </RepoContainer>
  );
};

export default RepoCard;
