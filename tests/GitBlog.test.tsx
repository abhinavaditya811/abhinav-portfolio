import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import GitBlog from '../app/blogs/git/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('Git Blog Page', () => {
  it('renders the title', () => {
    render(<GitBlog />, { wrapper });
    expect(screen.getByText('git commands')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<GitBlog />, { wrapper });
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
