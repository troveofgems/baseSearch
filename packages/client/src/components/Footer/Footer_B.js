import React from 'react';

import './style/footer.b.styles.css';
const FooterB = () => {
  return (
    <div className="creator-signature">
      <div className="copyright-text">
        <p>
          Pseudo-Copyright &copy; 2022. BaseSearch -
          <a
            href={"https://github.com/troveofgems/baseSearch"}
            rel={"noopener noreferrer"}
            target={"_blank"}
            style={{color: "cornflowerBlue"}}
          >
            TTOG
          </a>.
          All Rights Reserved.
        </p>
      </div>
    </div>
  )
};

export default FooterB;