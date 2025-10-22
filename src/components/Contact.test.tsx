import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact', () => {
  it('should render the contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
  });

  it('should render contact information cards', () => {
    render(<Contact />);
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Schedule Call')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  it('should update form fields when user types', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('should show validation errors for required fields', async () => {
    render(<Contact />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // HTML5 validation should prevent submission
    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    expect(nameInput.validity.valid).toBe(false);
  });

  it('should submit form with valid data', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Fill in required fields
    await user.type(screen.getByLabelText(/full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');

    // Select project type
    const projectTypeSelect = screen.getByLabelText(/project type/i);
    await user.selectOptions(projectTypeSelect, 'web-app');

    // Fill in message
    await user.type(
      screen.getByLabelText(/project details/i),
      'I need a web application'
    );

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Should show loading state
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });

    // Should show success message after submission
    await waitFor(
      () => {
        expect(screen.getByText(/thank you/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('should show success message after submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');

    const projectTypeSelect = screen.getByLabelText(/project type/i);
    await user.selectOptions(projectTypeSelect, 'web-app');

    await user.type(
      screen.getByLabelText(/project details/i),
      'I need a web application'
    );

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Should show success message after submission
    await waitFor(
      () => {
        expect(screen.getByText(/thank you/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('should render why work with us section', () => {
    render(<Contact />);
    expect(screen.getByText('Why Work With Us?')).toBeInTheDocument();
    expect(screen.getByText('Free initial consultation')).toBeInTheDocument();
    expect(screen.getByText('Transparent pricing & timeline')).toBeInTheDocument();
  });
});
