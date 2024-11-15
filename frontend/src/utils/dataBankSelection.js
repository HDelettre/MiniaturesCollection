// IMPORT DATA
import fullDatabase1950 from "../dataBank/FullBdd_1950"
import fullDatabase1960 from "../dataBank/FullBdd_1960"
import fullDatabase1970 from "../dataBank/FullBdd_1970"
import fullDatabase1980 from "../dataBank/FullBdd_1980"
import fullDatabase1990 from "../dataBank/FullBdd_1990"
import fullDatabase2000 from "../dataBank/FullBdd_2000"
import fullDatabase2010 from "../dataBank/FullBdd_2010"
import fullDatabase2020 from "../dataBank/FullBdd_2020"

export const DATABANK_SELECTION = (season) => {
  const dec=season.substring(0,3)
  const year=season.substring(3)
  let dataBank = ""
  switch (dec) {
    case "196" : dataBank = fullDatabase1960;
    break;
    case "197" : dataBank = fullDatabase1970;
    break;
    case "198" : dataBank = fullDatabase1980;
    break;
    case "199" : dataBank = fullDatabase1990;
    break;
    case "200" : dataBank = fullDatabase2000;
    break;
    case "210" : dataBank = fullDatabase2010;
    break;
    case "220" : dataBank = fullDatabase2020;
    break;
    default: dataBank = fullDatabase1950
  }
  const seasonData = dataBank[year];
  return seasonData;
}