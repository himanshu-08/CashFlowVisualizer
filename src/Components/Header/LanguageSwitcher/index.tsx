import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ilanguage } from '../../../Common/types';

const languages: Ilanguage[] = [
  { code: 'en', lang: "English" },
  { code: 'fr', lang: "French" },
  { code: 'hi', lang: "Hindi" },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: Ilanguage["lang"]) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {languages.map(language => {
        return <button
          onClick={() => handleLanguageChange(language.code)}
          key={language.code}
          className={language.code === i18n.language ? "selected" : ""}
        >{language.lang}</button>
      })}
    </div>
  );
}

export default LanguageSwitcher