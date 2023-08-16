
export const projectFilePatterns = ['project.json'];

import { CreateNodes, CreateNodesFunction } from 'nx/src/utils/nx-plugin';
import { dirname, relative }  from 'path';

const projectFilePattern = '**/project.json';

const createNodesFn: CreateNodesFunction = (
  projectConfigurationFile,
  context
) => {
  // Key doesn't appear to be used so we might use any value here
  const key = projectConfigurationFile;

  const root = relative(
    context.workspaceRoot,
    dirname(projectConfigurationFile)
  );

  const result = {
    projects: {
      // Issue happens even without any projects returned
      // [key]: {
      //   root,
      //   targets: {},
      // },
    },
  };
  return result;
};

export const createNodes: CreateNodes = [projectFilePattern, createNodesFn];


