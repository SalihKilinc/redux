import React from "react";
import { Dropdown } from "react-bootstrap";
import { langs ,getCurrentLang } from "../../helpers/locale-helper";
const LangSwitcher = () => {
const currentLang = getCurrentLang();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {langs.map((item) => (
          <Dropdown.Item href="#/action-1" key={item.code}>
            <span className={`fi fi-${item.country}`}></span> {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default LangSwitcher;
// drapdown menuyude aldik
// langs i map ile cevirdik
// baslik ulke  degerlerini item ile aldik bunlari {} ile yaptik yani js