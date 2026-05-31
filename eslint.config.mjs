import { fixupConfigRules } from '@eslint/compat';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = [
  ...fixupConfigRules(nextVitals),
  ...fixupConfigRules(nextTs),
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts']
  }
];

export default eslintConfig;
