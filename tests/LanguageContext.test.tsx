import { renderHook } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
  it('should default to English', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('translates a known key and falls back to the key otherwise', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t('blog.back')).toBe('back');
    expect(result.current.t('nonexistent.key')).toBe('nonexistent.key');
  });
});
