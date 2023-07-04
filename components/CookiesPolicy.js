import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiesPolicy = () => (
  <CookieConsent
    enableDeclineButton
    flipButtons
    location="bottom"
    buttonText="I understand"
    cookieName="YourCoockieName"
    style={{ background: 'blue' }}
    buttonStyle={{
      color: '#000',
      fontSize: '15px',
    }}
    declineButtonStyle={{
      margin: '10px 10px 10px 0',
    }}
    expires={450}
    debug
  >
    This website uses cookies. To read more about our privacy policy click here <a href="ethiostarPolicy.pdf" download className="underline transition-colors duration-200 hover:text-blue-500">Privacy Policy</a>
  </CookieConsent>
);
export default CookiesPolicy;
