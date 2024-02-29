import type { components } from '@octokit/openapi-types';

export type BaseMinimalLanguages = components['schemas']['language'];
export type BaseMinimalRepository = components['schemas']['minimal-repository'];

export type TMinimalRepository = Partial<BaseMinimalRepository>;
