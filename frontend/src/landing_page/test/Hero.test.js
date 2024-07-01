import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../home/Hero';

describe('Hero Component',()=>{
    test("renders hero image",() =>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("landing-page");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/landing.png");
    });
});