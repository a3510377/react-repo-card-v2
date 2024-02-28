import { FC } from 'react';
import { IMinimalRepository } from './types';
import styled from 'styled-components';
import React from 'react';

import { CodeIcon, ForkIcon, StarIcon } from './icon';

const RepoContainer = styled.div``;

const LanguagesContainer = styled.div`
  display: flex;
`;
const LangContainer = styled.div`
  position: relative;
  background-color: var(--lang-color);

  &:hover {
    &::after,
    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      bottom: -15px;
      border-color: transparent transparent #888;
      border-style: solid;
      border-width: 10px;
      content: '';
    }

    &::before {
      bottom: -50px;
      padding: 10px;
      background-color: #888;
      border-radius: 10px;
      content: attr(data-lang);
    }
  }
`;

export interface RepoCordProps {
  repository: IMinimalRepository;
}

export const RepoCard: FC<RepoCordProps> = ({ repository }) => {
  // const totalCode = Object.values(repository.languages).reduce(
  //   (a, b) => a + b,
  //   0
  // );

  return (
    <RepoContainer>
      <a target="_blank">
        <h1 />
        <p />
        <div>
          <div>
            <CodeIcon />
            <span />
          </div>
          <div>
            <StarIcon />
            <span />
          </div>
          <div>
            <ForkIcon />
            <span />
          </div>
        </div>
        <LanguagesContainer>
          {/* {Object.entries(repository.language).map(([lang, num]) => (
            <LangContainer
              key={lang}
              style={{ width: `${(num / totalCode) * 100}%` }}
            >
              {lang}
            </LangContainer>
          ))} */}
        </LanguagesContainer>
      </a>
    </RepoContainer>
  );
};

export default RepoCard;
