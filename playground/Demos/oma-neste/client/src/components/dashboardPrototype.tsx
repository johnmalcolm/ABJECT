import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import "../figma/css/kuljetusyrityksen-tyonjohtaja-macbook-air-13-2560-x-1667.css";
import "../figma/css/styleguide.css";
import "../figma/css/globals.css";

// import svgs
import union from "../img/union.svg";
import union1 from "../img/union-1.svg";
import vector from "../img/vector.svg";
import vector4 from "../img/vector-4.svg";
import nestelogo from "../img/neste-logo.svg";

// import pngs
import iris4 from "../img/iris-4@2x.png";
import maskgroup from "../img/mask-group@2x.png";

import unknown1 from "../img/2ec734cdbf9055c4b20f24121be3454879f7b-1-4@2x.png";
import unknown2 from "../img/764346-2@2x.png";

const DashboardPrototype = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      // render the HTML content using dangerouslySetInnerHTML
      <div className="dashboard-proto">
        <input
          type="hidden"
          id="anPageName"
          name="page"
          value="kuljetusyrityksen-tyonjohtaja-macbook-air-13-2560-x-1667"
        />
        <div className="container-center-horizontal">
          <div className="kuljetusyrityksen-tyonjohtaja-macbook-air-13-2560-x-1667 screen">
            <div className="flex-col flex">
              <header className="header">
                <div className="pnavigointi">
                  <div className="frame-40">
                    <img
                      className="neste-logo"
                      src={nestelogo}
                      alt="NESTE logo"
                    />
                    <div className="frame">
                      <div className="frame-29">
                        <div className="yksityisasiakkaat arial-regular-normal-granite-gray-12-8px">
                          YKSITYISASIAKKAAT
                        </div>
                      </div>
                      <div className="rectangle-110"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29">
                        <div className="yritysasiakkaat arial-regular-normal-granite-gray-12-8px">
                          YRITYSASIAKKAAT
                        </div>
                      </div>
                      <div className="rectangle-109"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29">
                        <div className="oma-neste">OMA NESTE</div>
                      </div>
                      <div className="rectangle-108"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29">
                        <div className="vastuulliset-ratkaisut arial-regular-normal-granite-gray-12-8px">
                          VASTUULLISET RATKAISUT
                        </div>
                      </div>
                      <div className="rectangle-107"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29">
                        <div className="konserni arial-regular-normal-granite-gray-12-8px">
                          KONSERNI
                        </div>
                      </div>
                      <div className="rectangle-106"></div>
                    </div>
                  </div>
                  <div className="frame-44">
                    <div className="frame-4">
                      <div className="group">
                        <img
                          className="icon-search icon"
                          src={union}
                          alt="icon-search"
                        />
                      </div>
                      <div className="etsi">Etsi</div>
                    </div>
                    <div className="frame-4">
                      <div className="group">
                        <img
                          className="icon-cart icon"
                          src={vector4}
                          alt="icon-cart"
                        />
                      </div>
                      <div className="ostoskori">Ostoskori</div>
                    </div>
                    <div className="frame-4">
                      <div className="group">
                        <img
                          className="union"
                          src={union1}
                          alt="Union"
                        />
                      </div>
                      <div className="ulos">Ulos</div>
                    </div>
                  </div>
                </div>
                <div className="oma-neste-navigointi">
                  <div className="frame-39">
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="etusivu arial-bold-mine-shaft-13-6px">
                          Etusivu
                        </div>
                      </div>
                      <div className="rectangle-108-1"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="tilaukset arial-regular-normal-granite-gray-13-6px">
                          Tilaukset
                        </div>
                      </div>
                      <div className="rectangle-110-1 rectangle-110-7"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="laskut arial-regular-normal-granite-gray-13-6px">
                          Laskut
                        </div>
                      </div>
                      <div className="rectangle-110-2 rectangle-110-7"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="raportit arial-regular-normal-granite-gray-13-6px">
                          Raportit
                        </div>
                      </div>
                      <div className="rectangle-110-3 rectangle-110-7"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="maksuvlineet arial-regular-normal-granite-gray-13-6px">
                          Maksuvälineet
                        </div>
                      </div>
                      <div className="rectangle-110-4 rectangle-110-7"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="hinnat arial-regular-normal-granite-gray-13-6px">
                          Hinnat
                        </div>
                      </div>
                      <div className="rectangle-110-5 rectangle-110-7"></div>
                    </div>
                    <div className="frame-38-3 frame-38-7">
                      <div className="rectangle-162"></div>
                    </div>
                    <div className="frame">
                      <div className="frame-29-1">
                        <div className="neste-my-hiilijalanjli-palvelu arial-regular-normal-granite-gray-13-6px">
                          Neste MY Hiilijalanjäli-palvelu
                        </div>
                      </div>
                      <div className="rectangle-110-6 rectangle-110-7"></div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="frame-1">
                      <div className="ilmoitukset">Ilmoitukset</div>
                    </div>
                    <div className="frame-1">
                      <div className="omat-tiedot">Omat tiedot</div>
                    </div>
                    <div className="frame-39-4">
                      <div className="number arial-bold-white-13-6px">6</div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="overlap-group">
                <div className="rectangle-163"></div>
                <div className="frame-71">
                  <div className="frame-35">
                    <p className="kytettviss-oleva">
                      Käytettävissä oleva saldo (31.3.2023 14:32)
                    </p>
                    <h1 className="address helveticaneue-light-mine-shaft-24px">
                      3 367,09 €
                    </h1>
                  </div>
                  <div className="rectangle-138"></div>
                  <div className="frame-35">
                    <div className="kyttraja-kk">Käyttöraja / kk</div>
                    <div className="address-7 helveticaneue-light-mine-shaft-24px">
                      14 000,00 €
                    </div>
                  </div>
                </div>
                <div className="frame-107">
                  <div className="frame-10">
                    <div className="frame-38-1 frame-38-7">
                      <div className="frame-38-2 frame-38-7">
                        <div className="frame-2">
                          <div className="tilaa helveticaneue-light-mine-shaft-20px">
                            Tilaa polttoainetta
                          </div>
                          <div className="text arial-regular-normal-granite-gray-12px">
                            31.3.2023 10:41
                          </div>
                        </div>
                      </div>
                      <p className="polttoaineen-mr-s helveticaneue-light-mine-shaft-15px">
                        <span className="helveticaneue-light-mine-shaft-15px">
                          Polttoaineen määrä säiliössä lähestyy asettamaasi
                          hälytysrajaa. Tilaa nyt tankki täyteen, saat{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          3 %
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          {" "}
                          alennuksen.
                        </span>
                      </p>
                    </div>
                    <div className="frame-3">
                      <div className="frame-78">
                        <div className="tilaa-polttoainetta-3 arial-bold-white-12-8px">
                          TILAA POLTTOAINETTA
                        </div>
                      </div>
                      <div className="poista-ilmoitus arial-regular-normal-smalt-12-8px">
                        Poista ilmoitus
                      </div>
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="frame-38-1 frame-38-7">
                      <div className="frame-38-2 frame-38-7">
                        <div className="frame-2">
                          <div className="tilaus-92673934-on-lhetetty tilaus-92673934-on helveticaneue-light-mine-shaft-20px">
                            Tilaus 92673934 on lähetetty
                          </div>
                          <div className="text arial-regular-normal-granite-gray-12px">
                            31.3.2023 09:53
                          </div>
                        </div>
                      </div>
                      <p className="tilaus-92673934-on-l tilaus-92673934-on helveticaneue-light-mine-shaft-15px">
                        <span className="helveticaneue-light-mine-shaft-15px">
                          Tilaus{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          92673934
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          {" "}
                          on lähetetty. Arvioitu saapumispäivä on{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          3.4.2023
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          . Saat tekstiviestin saapumispäivän varmistuttua.
                        </span>
                      </p>
                    </div>
                    <div className="frame-3">
                      <div className="frame-78">
                        <div className="nyt-tilaus arial-bold-white-12-8px">
                          NÄYTÄ TILAUS
                        </div>
                      </div>
                      <div className="poista-ilmoitus-4 arial-regular-normal-smalt-12-8px">
                        Poista ilmoitus
                      </div>
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="frame-38-1 frame-38-7">
                      <div className="frame-38-2 frame-38-7">
                        <div className="frame-2">
                          <div className="tilaa-uusi-maksukortti helveticaneue-light-mine-shaft-20px">
                            Tilaa uusi maksukortti
                          </div>
                          <div className="text arial-regular-normal-granite-gray-12px">
                            31.3.2023 10:41
                          </div>
                        </div>
                      </div>
                      <p className="kortti-xxxx-xxxx-xxx helveticaneue-light-mine-shaft-15px">
                        <span className="helveticaneue-light-mine-shaft-15px">
                          Kortti{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          xxxx-xxxx-xxxx-8398
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          {" "}
                          vanhenee{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          31.4.2023
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          . Tilaa nyt uusi kortti ja varmista käytön jatkuminen
                          katkoitta.
                        </span>
                      </p>
                    </div>
                    <div className="frame-3">
                      <div className="frame-78">
                        <div className="tilaa arial-bold-white-12-8px">
                          TILAA MAKSUKORTTI
                        </div>
                      </div>
                      <div className="poista-ilmoitus-4 arial-regular-normal-smalt-12-8px">
                        Poista ilmoitus
                      </div>
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="frame-38-1 frame-38-7">
                      <div className="frame-38-2 frame-38-7">
                        <div className="frame-2">
                          <div className="pivit helveticaneue-light-mine-shaft-20px">
                            Päivitä saldomuistutukset
                          </div>
                          <div className="text arial-regular-normal-granite-gray-12px">
                            31.3.2023 10:41
                          </div>
                        </div>
                      </div>
                      <p className="kortin-xxxx-xxxx-xxx helveticaneue-light-mine-shaft-15px">
                        <span className="helveticaneue-light-mine-shaft-15px">
                          Kortin{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          xxxx-xxxx-xxxx-7254
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          saldo on usein lähellä käyttörajaa. Päivitä
                          maksukorttien saldomuistutukset.
                        </span>
                      </p>
                    </div>
                    <div className="frame-3">
                      <div className="frame-78">
                        <div className="pivit arial-bold-white-12-8px">
                          PÄIVITÄ TIEDOT
                        </div>
                      </div>
                      <div className="poista-ilmoitus-4 arial-regular-normal-smalt-12-8px">
                        Poista ilmoitus
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-100">
                  <div className="tervetuloa-takaisin-kimmo">
                    Tervetuloa takaisin, Kimmo!
                  </div>
                  <div className="frame-5">
                    <div className="frame-5-item">Sinulle on</div>
                    <div className="frame-41">
                      <div className="number-11 arial-bold-white-13-6px">6</div>
                    </div>
                    <div className="frame-5-item">uutta ilmoitusta:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row flex">
              <div className="flex-col-1 flex-col-3">
                <div className="frame-container">
                  <div className="frame-6">
                    <div className="frame-99">
                      <div className="frame-7">
                        <div className="polttoaineen-ja-ad-bluen-mr helveticaneue-light-mine-shaft-24px">
                          Polttoaineen ja AdBluen määrä
                        </div>
                        <div className="group-3">
                          <img
                            className="vector"
                            src={vector}
                            alt="Vector"
                          />
                        </div>
                      </div>
                      <p className="osto helveticaneue-light-mine-shaft-15px">
                        Ostohistoriaasi perustuen sinulla on jäljellä seuraava
                        määrä polttoainetta ja AdBlue-urealiuosta.
                      </p>
                    </div>
                    <div className="frame-38-4 frame-38-7">
                      <div className="frame-8">
                        <div className="neste helveticaneue-light-smalt-16px">
                          Neste Futura Diesel
                        </div>
                        <div className="frame-51">
                          <div className="rectangle-135-1"></div>
                        </div>
                        <div className="frame-5">
                          <div className="frame-39-5">
                            <div className="frame-41-1">
                              <div className="text arial-bold-white-13-6px">
                                !
                              </div>
                            </div>
                          </div>
                          <div className="frame-9">
                            <div className="text-7 text helveticaneue-light-mine-shaft-20px">
                              601,86
                            </div>
                            <div className="litraa helveticaneue-light-mine-shaft-16px">
                              litraa
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-100-1">
                        <div className="neste helveticaneue-light-smalt-16px">
                          Neste AdBlue
                        </div>
                        <div className="frame-5-1">
                          <div className="rectangle-135-2"></div>
                        </div>
                        <div className="frame-9">
                          <div className="text-8 text helveticaneue-light-mine-shaft-20px">
                            178,46
                          </div>
                          <div className="litraa-1 helveticaneue-light-mine-shaft-16px">
                            litraa
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-14"></div>
                    <div className="frame-38-5 frame-38-7 arial-regular-normal-smalt-12-8px">
                      <div className="tilaa-polttoainetta-3">
                        TILAA POLTTOAINETTA
                      </div>
                      <div className="tilaa-ad-blue-urealiuosta">
                        TILAA ADBLUE-UREALIUOSTA
                      </div>
                    </div>
                  </div>
                  <div className="frame-6">
                    <div className="frame-99">
                      <div className="frame-7">
                        <div className="ostokertym helveticaneue-light-mine-shaft-24px">
                          Ostokertymä
                        </div>
                        <div className="group-3">
                          <img
                            className="vector"
                            src={vector}
                            alt="Vector"
                          />
                        </div>
                      </div>
                      <p className="osto helveticaneue-light-mine-shaft-15px">
                        <span className="helveticaneue-light-mine-shaft-15px">
                          Ostot on tässä kuussa ylittänyt{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          10 000 €
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          {" "}
                          rajan. Olet oikeutettu{" "}
                        </span>
                        <span className="helveticaneue-medium-mine-shaft-15px">
                          4 %
                        </span>
                        <span className="helveticaneue-light-mine-shaft-15px">
                          alennukseen rajan ylittäneistä ostoistasi.
                        </span>
                      </p>
                    </div>
                    <div className="frame-2">
                      <div className="ostot-maaliskuu helveticaneue-light-mine-shaft-16px">
                        Ostot / Maaliskuu
                      </div>
                      <div className="frame-5-1">
                        <div className="frame-39">
                          <div className="rectangle-135-3"></div>
                        </div>
                        <div className="rectangle-166"></div>
                      </div>
                      <div className="frame-7">
                        <div className="address-2 address-7 helveticaneue-light-mine-shaft-20px">
                          10 632,91 €
                        </div>
                        <div className="frame-9">
                          <div className="alennus helveticaneue-light-mine-shaft-16px">
                            Alennus:
                          </div>
                          <div className="percent">4 %</div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-14"></div>
                    <div className="frame-38 arial-regular-normal-smalt-12-8px">
                      <div className="nyt-kaikki-hinnat nyt-kaikki">
                        NÄYTÄ KAIKKI HINNAT
                      </div>
                      <div className="nyt-kaikki-raportit nyt-kaikki">
                        NÄYTÄ KAIKKI RAPORTIT
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-container-1">
                  <div className="frame-1-1">
                    <div className="frame-39-1">
                      <div className="group-3">
                        <img
                          className="vector"
                          src={vector}
                          alt="Vector"
                        />
                      </div>
                      <div className="frame-39-2">
                        <div className="xxe-629 helveticaneue-light-mine-shaft-20px">
                          XXE-629
                        </div>
                        <div className="frame-132">
                          <div className="liitetty-kortti arial-regular-normal-mine-shaft-12-8px">
                            Liitetty kortti:
                          </div>
                          <div className="xxxx-xxxx-xxxx arial-regular-normal-white-12-8px">
                            <span className="arial-regular-normal-mountain-mist-12-8px">
                              xxxx-xxxx-xxxx-
                            </span>
                            <span className="arial-regular-normal-mine-shaft-12-8px">
                              7254
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-131">
                      <div className="frame-8-1 frame-8-3 helveticaneue-light-mine-shaft-16px">
                        <div className="keskikulutus">Keskikulutus:</div>
                        <div className="x54-litraa">5,4 litraa</div>
                      </div>
                      <div className="frame-5-1">
                        <div className="rectangle-135-4"></div>
                      </div>
                      <div className="frame-82">
                        <div className="rectangle-135"></div>
                      </div>
                      <div className="frame-8-1 frame-8-3 arial-regular-normal-mine-shaft-12-8px">
                        <div className="keskiarvo">Keskiarvo:</div>
                        <div className="x58-litraa">5,8 litraa</div>
                      </div>
                    </div>
                    <div className="frame-130">
                      <div className="tapahtumat helveticaneue-light-mine-shaft-16px">
                        Tapahtumat:
                      </div>
                      <div className="frame-7">
                        <div className="frame-11">
                          <div className="number-2 number-11 helveticaneue-light-mine-shaft-20px">
                            14
                          </div>
                          <div className="tankkausta arial-regular-normal-mine-shaft-12-8px">
                            tankkausta
                          </div>
                        </div>
                        <div className="frame-11">
                          <div className="number-3 number-11 helveticaneue-light-mine-shaft-20px">
                            8
                          </div>
                          <div className="pesua arial-regular-normal-mine-shaft-12-8px">
                            pesua
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="iris-4"
                      src={iris4}
                      alt="iris 4"
                    />
                  </div>
                  <div className="frame-1-1">
                    <div className="frame-39-1">
                      <div className="group-3">
                        <img
                          className="vector"
                          src={vector}
                          alt="Vector"
                        />
                      </div>
                      <div className="frame-39-2">
                        <div className="xxe-629-3 helveticaneue-light-mine-shaft-20px">
                          XXE-629
                        </div>
                        <div className="frame-132">
                          <div className="liitetty-kortti-3 arial-regular-normal-mine-shaft-12-8px">
                            Liitetty kortti:
                          </div>
                          <div className="xxxx-xxxx-xxxx arial-regular-normal-white-12-8px">
                            <span className="arial-regular-normal-mountain-mist-12-8px">
                              xxxx-xxxx-xxxx-
                            </span>
                            <span className="arial-regular-normal-mine-shaft-12-8px">
                              2176
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-131">
                      <div className="frame-8-1 frame-8-3 helveticaneue-light-mine-shaft-16px">
                        <div className="keskikulutus-3">Keskikulutus:</div>
                        <div className="x63-litraa">6,3 litraa</div>
                      </div>
                      <div className="frame-5-1">
                        <div className="rectangle-135-5"></div>
                      </div>
                      <div className="frame-82">
                        <div className="rectangle-135-6"></div>
                      </div>
                      <div className="frame-8-1 frame-8-3 arial-regular-normal-mine-shaft-12-8px">
                        <div className="keskiarvo-3">Keskiarvo:</div>
                        <div className="x58-litraa-3">5,8 litraa</div>
                      </div>
                    </div>
                    <div className="frame-130">
                      <div className="tapahtumat helveticaneue-light-mine-shaft-16px">
                        Tapahtumat:
                      </div>
                      <div className="frame-7">
                        <div className="frame-11">
                          <div className="number-4 number-11 helveticaneue-light-mine-shaft-20px">
                            7
                          </div>
                          <div className="tankkausta-3 arial-regular-normal-mine-shaft-12-8px">
                            tankkausta
                          </div>
                        </div>
                        <div className="frame-11">
                          <div className="number-5 number-11 helveticaneue-light-mine-shaft-20px">
                            5
                          </div>
                          <div className="pesua-3 arial-regular-normal-mine-shaft-12-8px">
                            pesua
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="x2ec734cdbf9055c4b20f"
                      src={unknown1}
                      alt="2ec734cdbf9055c4b20f24121be3454879f7b-1 4"
                    />
                  </div>
                  <div className="frame-1-1">
                    <div className="frame-39-1">
                      <div className="group-3">
                        <img
                          className="vector"
                          src={vector}
                          alt="Vector"
                        />
                      </div>
                      <div className="frame-39-2">
                        <div className="xxe-629-3 helveticaneue-light-mine-shaft-20px">
                          XXE-629
                        </div>
                        <div className="frame-132">
                          <div className="liitetty-kortti-3 arial-regular-normal-mine-shaft-12-8px">
                            Liitetty kortti:
                          </div>
                          <div className="xxxx-xxxx-xxxx-7254-1 arial-regular-normal-white-12-8px">
                            <span className="arial-regular-normal-mountain-mist-12-8px">
                              xxxx-xxxx-xxxx-
                            </span>
                            <span className="arial-regular-normal-mine-shaft-12-8px">
                              7254
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-131">
                      <div className="frame-8-1 frame-8-3 helveticaneue-light-mine-shaft-16px">
                        <div className="keskikulutus-3">Keskikulutus:</div>
                        <div className="x52-litraa">5,2 litraa</div>
                      </div>
                      <div className="frame-5-1">
                        <div className="rectangle-135-7"></div>
                      </div>
                      <div className="frame-82">
                        <div className="rectangle-135"></div>
                      </div>
                      <div className="frame-8-1 frame-8-3 arial-regular-normal-mine-shaft-12-8px">
                        <div className="keskiarvo-3">Keskiarvo:</div>
                        <div className="x58-litraa-3">5,8 litraa</div>
                      </div>
                    </div>
                    <div className="frame-130">
                      <div className="tapahtumat helveticaneue-light-mine-shaft-16px">
                        Tapahtumat:
                      </div>
                      <div className="frame-7">
                        <div className="frame-11">
                          <div className="number-6 number-11 helveticaneue-light-mine-shaft-20px">
                            12
                          </div>
                          <div className="tankkausta-3 arial-regular-normal-mine-shaft-12-8px">
                            tankkausta
                          </div>
                        </div>
                        <div className="frame-11">
                          <div className="number-7 number-11 helveticaneue-light-mine-shaft-20px">
                            9
                          </div>
                          <div className="pesua-3 arial-regular-normal-mine-shaft-12-8px">
                            pesua
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="iris-4"
                      src={iris4}
                      alt="iris 4"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col-2 flex-col-3">
                <div className="frame-6">
                  <div className="frame-78-1">
                    <div className="maksuvlineet-1 helveticaneue-light-mine-shaft-24px">
                      Maksuvälineet
                    </div>
                    <div className="group-3">
                      <img
                        className="vector"
                        src={vector}
                        alt="Vector"
                      />
                    </div>
                  </div>
                  <div className="frame-38-6 frame-38-7">
                    <div className="frame-81">
                      <div className="frame-59">
                        <div className="frame-9">
                          <div className="number-8 number-11 helveticaneue-light-mine-shaft-24px">
                            134
                          </div>
                          <div className="maksua helveticaneue-light-mine-shaft-16px">
                            maksua
                          </div>
                        </div>
                        <div className="neste-ppill arial-regular-normal-mine-shaft-12-8px">
                          Neste-äppillä
                        </div>
                      </div>
                      <div className="frame-9">
                        <div className="address-3 address-7 helveticaneue-light-tropical-rain-forest-20px">
                          7 832,61
                        </div>
                        <div className="price helveticaneue-light-tropical-rain-forest-16px">
                          €
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-16"></div>
                    <div className="frame-82-1">
                      <div className="frame-59">
                        <div className="frame-9">
                          <div className="number-9 number-11 helveticaneue-light-mine-shaft-24px">
                            69
                          </div>
                          <div className="maksua-3 helveticaneue-light-mine-shaft-16px">
                            maksua
                          </div>
                        </div>
                        <div className="neste-kortilla arial-regular-normal-mine-shaft-12-8px">
                          Neste kortilla
                        </div>
                      </div>
                      <div className="frame-9">
                        <div className="address-4 address-7 helveticaneue-light-tropical-rain-forest-20px">
                          2 387,98
                        </div>
                        <div className="price-7 helveticaneue-light-tropical-rain-forest-16px">
                          €
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-16"></div>
                    <div className="frame-83">
                      <div className="frame-59">
                        <div className="frame-9">
                          <div className="number-10 number-11 helveticaneue-light-mine-shaft-24px">
                            8
                          </div>
                          <div className="maksua-3 helveticaneue-light-mine-shaft-16px">
                            maksua
                          </div>
                        </div>
                        <div className="muulla-maksukortilla arial-regular-normal-mine-shaft-12-8px">
                          muulla maksukortilla
                        </div>
                      </div>
                      <div className="frame-9">
                        <div className="text-1 text helveticaneue-light-tropical-rain-forest-20px">
                          27,53
                        </div>
                        <div className="price-7 helveticaneue-light-tropical-rain-forest-16px">
                          €
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-144"></div>
                  <div className="frame-38 arial-regular-normal-smalt-12-8px">
                    <div className="nyt-kaikki-laskut nyt-kaikki">
                      NÄYTÄ KAIKKI LASKUT
                    </div>
                    <div className="nyt-kaikki-raportit-1">
                      NÄYTÄ KAIKKI RAPORTIT
                    </div>
                  </div>
                </div>
                <div className="frame-container-2">
                  <div className="frame-115">
                    <div className="frame-78-1">
                      <div className="viimeisimmt-tilaukset helveticaneue-light-mine-shaft-24px">
                        Viimeisimmät tilaukset
                      </div>
                      <div className="group-3">
                        <img
                          className="vector"
                          src={vector}
                          alt="Vector"
                        />
                      </div>
                    </div>
                    <div className="frame-8-2 frame-8-3">
                      <div className="frame-36">
                        <img
                          className="mask-group"
                          src={maskgroup}
                          alt="Mask group"
                        />
                        <div className="frame-39-3">
                          <p className="neste-pro-w-ll-iii-0-w-30-47-l helveticaneue-light-smalt-16px">
                            Neste Pro+ W LL-III 0W-30, 4,7 l
                          </p>
                          <div className="frame-7">
                            <div className="frame-8 arial-regular-normal-mine-shaft-12-8px">
                              <div className="tuotenumero">
                                Tuotenumero: 295536
                              </div>
                              <div className="voiteluaineet">Voiteluaineet</div>
                            </div>
                            <div className="frame-80">
                              <div className="frame-8 arial-regular-normal-mine-shaft-12-8px">
                                <div className="mr">Määrä:</div>
                                <div className="hinta">Á-hinta:</div>
                              </div>
                              <div className="frame-37 arial-bold-mine-shaft-13-6px">
                                <div className="address-5 address-7">
                                  15 kpl
                                </div>
                                <div className="price-3 price-7">44,25 €</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-3">
                        <div className="frame-9">
                          <div className="yhteens helveticaneue-light-mine-shaft-16px">
                            Yhteensä:
                          </div>
                          <div className="price-4 price-7 helveticaneue-light-tropical-rain-forest-20px">
                            663,75 €
                          </div>
                        </div>
                        <div className="frame-77">
                          <div className="tilaa arial-bold-white-12-8px">
                            TILAA UUDESTAAN
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-14"></div>
                    <div className="frame-8-2 frame-8-3">
                      <div className="frame-36">
                        <img
                          className="x764346-2"
                          src={unknown2}
                          alt="764346 2"
                        />
                        <div className="frame-39-3">
                          <div className="neste-voltera-pro-pss helveticaneue-light-smalt-16px">
                            Neste Voltera Pro (pss)
                          </div>
                          <div className="frame-7">
                            <div className="frame-8 arial-regular-normal-mine-shaft-12-8px">
                              <div className="tuotenumero">
                                Tuotenumero: 764141
                              </div>
                              <div className="lasinpesunesteet">
                                Lasinpesunesteet
                              </div>
                            </div>
                            <div className="frame-80">
                              <div className="frame-8 arial-regular-normal-mine-shaft-12-8px">
                                <div className="mr-1">Määrä:</div>
                                <div className="hinta-1">Á-hinta:</div>
                              </div>
                              <div className="frame-37 arial-bold-mine-shaft-13-6px">
                                <div className="address-6 address-7">
                                  25 kpl
                                </div>
                                <div className="price-5 price-7">37,25 €</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-3">
                        <div className="frame-9">
                          <div className="yhteens-1 helveticaneue-light-mine-shaft-16px">
                            Yhteensä:
                          </div>
                          <div className="price-6 price-7 helveticaneue-light-tropical-rain-forest-20px">
                            931,25 €
                          </div>
                        </div>
                        <div className="frame-77-1">
                          <div className="tilaa-uudestaan-1 arial-bold-white-12-8px">
                            TILAA UUDESTAAN
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-14"></div>
                    <div className="nyt-kaikki arial-regular-normal-smalt-12-8px">
                      NÄYTÄ KAIKKI TILAUKSET
                    </div>
                  </div>
                  <div className="frame-118">
                    <div className="oma-neste-apuri">OMA NESTE APURI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DashboardPrototype;
