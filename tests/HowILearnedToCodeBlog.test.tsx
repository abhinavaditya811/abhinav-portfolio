import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import HowILearnedToCodeBlog from '../app/blogs/how-i-learned-to-code/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('How I Learned to Code Blog Page', () => {
  it('renders the title', () => {
    render(<HowILearnedToCodeBlog />, { wrapper });
    expect(screen.getByText('how i learned to code')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<HowILearnedToCodeBlog />, { wrapper });
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
