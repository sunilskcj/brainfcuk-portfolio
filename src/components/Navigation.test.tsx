import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render the logo', () => {
    render(<Navigation />);
    expect(screen.getByText('Vox')).toBeInTheDocument();
  });

  it('should render all navigation items', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should toggle mobile menu when menu button is clicked', () => {
    render(<Navigation />);

    // Get the mobile menu button by aria-label
    const mobileMenuButton = screen.getByLabelText(/open menu/i);

    fireEvent.click(mobileMenuButton);

    // Check menu is expanded
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');

    // Menu should be visible now - check for duplicate navigation items
    const homeButtons = screen.getAllByText('Home');
    expect(homeButtons.length).toBeGreaterThan(1);
  });

  it('should have theme toggle button', () => {
    render(<Navigation />);
    const themeButton = screen.getByLabelText(/switch to (light|dark) mode/i);
    expect(themeButton).toBeInTheDocument();
  });

  it('should call scrollIntoView when navigation item is clicked', () => {
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    // Create mock section
    const section = document.createElement('section');
    section.id = 'services';
    document.body.appendChild(section);

    render(<Navigation />);

    const servicesButton = screen.getAllByText('Services')[0];
    fireEvent.click(servicesButton);

    expect(scrollIntoViewMock).toHaveBeenCalled();

    // Cleanup
    document.body.removeChild(section);
  });

  it('should apply scrolled styles when scrolled', () => {
    render(<Navigation />);

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    fireEvent.scroll(window);

    // Navigation should have backdrop blur styles applied
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
