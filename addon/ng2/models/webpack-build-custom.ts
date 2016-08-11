import { CliConfig } from './config';
import * as path from 'path';
import * as fs from 'fs';

export function getWebpackCustomConfig(projectRoot: string, env: string) {
  if (
    CliConfig.fromProject().webpack &&
    CliConfig.fromProject().webpack[env]
  ) {
    const webpackCustomConfig = CliConfig.fromProject().webpack[env].config;
    return fs.existsSync(webpackCustomConfig) ?
      require(path.resolve(projectRoot, webpackCustomConfig)) :
      false;
  }
};
