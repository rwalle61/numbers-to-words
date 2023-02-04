import { execSync, spawnSync } from 'child_process';
import { rmSync } from 'fs';
import { join } from 'path';

const outputDir = join(__dirname, '..', 'bin');
const command = join(outputDir, 'numbers-to-words');

describe('e2e', () => {
  beforeAll(() => {
    rmSync(outputDir, {
      recursive: true,
      force: true,
    });

    execSync('yarn build');
  });

  it('outputs words to stdout with exit code', () => {
    const { status, stdout, stderr } = spawnSync(command, ['52'], {
      encoding: 'utf8',
    });

    expect(status).toBe(0);
    expect(stdout).toBe('fifty-two\n');
    expect(stderr).toBe('');
  });

  it('outputs error to stderr with exit code', () => {
    const { status, stdout, stderr } = spawnSync(command, ['-1'], {
      encoding: 'utf8',
    });

    expect(status).toBe(1);
    expect(stdout).toBe('');
    expect(stderr).toContain('Arg must be between 0-100000');
  });
});
