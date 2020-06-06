import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../app/components/auth/login/Login';

describe('Login.js', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ token: 'rycvw67787sbjcbjjnk' })
    }));
  });
  afterEach(() => {
    global.fetch.mockRestore();
  });
  test('Makes available inputs to receive user input', () => {
    const { getByLabelText, getByText } = render(<Login />);
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  test('Captures the right input parameters from the user', () => {
    const username = 'John';
    const password = 'password';

    const { getByLabelText, getByDisplayValue } = render(<Login />);

    fireEvent.change(getByLabelText('Username'), { bubbles: true, target: { value: username } });
    expect(getByDisplayValue(username)).toBeInTheDocument();

    fireEvent.change(getByLabelText('Password'), { bubbles: true, target: { value: password } });
    expect(getByDisplayValue(password)).toBeInTheDocument();
  });

  test('Sends captured user data to the API for authentication', async () => {
    const username = 'John';
    const password = 'password';

    const { getByLabelText, getByText } = render(<Login/>);

    getByLabelText('Username').value = username;
    getByLabelText('Password').value = password;

    fireEvent.click(getByText('Login'));

    expect(getByText('Login')).toBeDisabled();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  test('Indicates false loading status after API response', async () => {
    const { getByText } = render(<Login/>);

    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    expect(getByText('Login')).toBeEnabled();
  });
});
