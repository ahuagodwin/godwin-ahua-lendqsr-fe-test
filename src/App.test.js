import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/auth/login';


describe('Login component', () => {
    test("should render email and password input fields", () => {
        render(
            <>
                <Router><Login /></Router>
            </>
        );
        const emailInput = screen.getByPlaceholderText("email");
        const passwordInput = screen.getByPlaceholderText("password");
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
      });
      
});

