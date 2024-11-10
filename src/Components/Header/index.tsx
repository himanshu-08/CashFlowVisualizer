import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import "./index.css";

function Header() {
  const { t } = useTranslation()

  return (
    <header>
      <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
        <div className="logo">
          <img src="logo192.png" className="App-logo" alt="logo" />
          <span>{t("greeting")}</span>
        </div>
        <nav>
          <ul>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;