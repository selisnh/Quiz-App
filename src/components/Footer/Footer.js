import { getByPlaceholderText } from '@testing-library/react';
import React from 'react';

const Footer = () => {
    return (
        <div style={{
            textAlign: 'center',
            marginBottom: 10,
        }}>
            Made with React by {" "}
            <a href="https://github.com/selisnh" style={{ cursor: "pointer", }}> 
            <strong>Seli </strong><img src="./github-logo.ico" alt="github" style={{width:"15px",}} /></a>
        </div>
    );
};

export default Footer;
