import React, { useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectCountry = ({ value }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      "gentilico": "brasileira",
      "label": "Brasil",
      "label_int": "Brazil",
      "value": "BR"
    },
    {
      "gentilico": "afegãne",
      "label": "Afeganistão",
      "label_int": "Afghanistan",
      "value": "AF"
    },
    {
      "gentilico": "sul-africana",
      "label": "África do Sul",
      "label_int": "South Africa",
      "value": "ZA"
    },
    {
      "gentilico": "albanesa",
      "label": "Albânia",
      "label_int": "Albania",
      "value": "AL"
    },
    {
      "gentilico": "alemã",
      "label": "Alemanha",
      "label_int": "Germany",
      "value": "DE"
    },
    {
      "gentilico": "andorrana",
      "label": "Andorra",
      "label_int": "Andorra",
      "value": "AD"
    },
    {
      "gentilico": "angolana",
      "label": "Angola",
      "label_int": "Angola",
      "value": "AO"
    },
    {
      "gentilico": "anguillana",
      "label": "Anguilla",
      "label_int": "Anguilla",
      "value": "AI"
    },
    {
      "gentilico": "de antártida",
      "label": "Antártida",
      "label_int": "Antarctica",
      "value": "AQ"
    },
    {
      "gentilico": "antiguana",
      "label": "Antígua e Barbuda",
      "label_int": "Antigua & Barbuda",
      "value": "AG"
    },
    {
      "gentilico": "saudita",
      "label": "Arábia Saudita",
      "label_int": "Saudi Arabia",
      "value": "SA"
    },
    {
      "gentilico": "argelina",
      "label": "Argélia",
      "label_int": "Algeria",
      "value": "DZ"
    },
    {
      "gentilico": "argentina",
      "label": "Argentina",
      "label_int": "Argentina",
      "value": "AR"
    },
    {
      "gentilico": "armênia",
      "label": "Armênia",
      "label_int": "Armenia",
      "value": "AM"
    },
    {
      "gentilico": "arubana",
      "label": "Aruba",
      "label_int": "Aruba",
      "value": "AW"
    },
    {
      "gentilico": "australiana",
      "label": "Austrália",
      "label_int": "Australia",
      "value": "AU"
    },
    {
      "gentilico": "austríaca",
      "label": "Áustria",
      "label_int": "Austria",
      "value": "AT"
    },
    {
      "gentilico": "azerbaijano",
      "label": "Azerbaijão",
      "label_int": "Azerbaijan",
      "value": "AZ"
    },
    {
      "gentilico": "bahamense",
      "label": "Bahamas",
      "label_int": "Bahamas",
      "value": "BS"
    },
    {
      "gentilico": "barenita",
      "label": "Bahrein",
      "label_int": "Bahrain",
      "value": "BH"
    },
    {
      "gentilico": "bengali",
      "label": "Bangladesh",
      "label_int": "Bangladesh",
      "value": "BD"
    },
    {
      "gentilico": "barbadiana",
      "label": "Barbados",
      "label_int": "Barbados",
      "value": "BB"
    },
    {
      "gentilico": "bielo-russa",
      "label": "Belarus",
      "label_int": "Belarus",
      "value": "BY"
    },
    {
      "gentilico": "belga",
      "label": "Bélgica",
      "label_int": "Belgium",
      "value": "BE"
    },
    {
      "gentilico": "belizenha",
      "label": "Belize",
      "label_int": "Belize",
      "value": "BZ"
    },
    {
      "gentilico": "beninense",
      "label": "Benin",
      "label_int": "Benin",
      "value": "BJ"
    },
    {
      "gentilico": "bermudiana",
      "label": "Bermudas",
      "label_int": "Bermuda",
      "value": "BM"
    },
    {
      "gentilico": "boliviana",
      "label": "Bolívia",
      "label_int": "Bolivia",
      "value": "BO"
    },
    {
      "gentilico": "bósnia",
      "label": "Bósnia-Herzegóvina",
      "label_int": "Bosnia & Herzegovina",
      "value": "BA"
    },
    {
      "gentilico": "betchuana",
      "label": "Botsuana",
      "label_int": "Botswana",
      "value": "BW"
    },
    {
      "gentilico": "bruneiana",
      "label": "Brunei",
      "label_int": "Brunei",
      "value": "BN"
    },
    {
      "gentilico": "búlgara",
      "label": "Bulgária",
      "label_int": "Bulgaria",
      "value": "BG"
    },
    {
      "gentilico": "burquinês",
      "label": "Burkina Fasso",
      "label_int": "Burkina Faso",
      "value": "BF"
    },
    {
      "gentilico": "burundinesa",
      "label": "Burundi",
      "label_int": "Burundi",
      "value": "BI"
    },
    {
      "gentilico": "butanesa",
      "label": "Butão",
      "label_int": "Bhutan",
      "value": "BT"
    },
    {
      "gentilico": "cabo-verdiana",
      "label": "Cabo Verde",
      "label_int": "Cape Verde",
      "value": "CV"
    },
    {
      "gentilico": "camaronesa",
      "label": "Camarões",
      "label_int": "Cameroon",
      "value": "CM"
    },
    {
      "gentilico": "cambojana",
      "label": "Camboja",
      "label_int": "Cambodia",
      "value": "KH"
    },
    {
      "gentilico": "canadense",
      "label": "Canadá",
      "label_int": "Canada",
      "value": "CA"
    },
    {
      "gentilico": "canário",
      "label": "Canárias",
      "label_int": "Canary Islands",
      "value": "IC"
    },
    {
      "gentilico": "cazaque",
      "label": "Cazaquistão",
      "label_int": "Kazakhstan",
      "value": "KZ"
    },
    {
      "gentilico": "de ceuta e melilla",
      "label": "Ceuta e Melilla",
      "label_int": "Ceuta & Melilla",
      "value": "EA"
    },
    {
      "gentilico": "chadiana",
      "label": "Chade",
      "label_int": "Chad",
      "value": "TD"
    },
    {
      "gentilico": "chilena",
      "label": "Chile",
      "label_int": "Chile",
      "value": "CL"
    },
    {
      "gentilico": "chinesa",
      "label": "China",
      "label_int": "China",
      "value": "CN"
    },
    {
      "gentilico": "cipriota",
      "label": "Chipre",
      "label_int": "Cyprus",
      "value": "CY"
    },
    {
      "gentilico": "cingapuriana",
      "label": "Cingapura",
      "label_int": "Singapore",
      "value": "SG"
    },
    {
      "gentilico": "colombiana",
      "label": "Colômbia",
      "label_int": "Colombia",
      "value": "CO"
    },
    {
      "gentilico": "comorense",
      "label": "Comores",
      "label_int": "Comoros",
      "value": "KM"
    },
    {
      "gentilico": "congolesa",
      "label": "Congo",
      "label_int": "Congo (Republic)",
      "value": "CG"
    },
    {
      "gentilico": "norte-coreano",
      "label": "Coréia do Norte",
      "label_int": "North Korea",
      "value": "KP"
    },
    {
      "gentilico": "norte-coreana",
      "label": "Coréia do Sul",
      "label_int": "South Korea",
      "value": "KR"
    },
    {
      "gentilico": "marfinense",
      "label": "Costa do Marfim",
      "label_int": "Côte d¿Ivoire",
      "value": "CI"
    },
    {
      "gentilico": "costarriquenha",
      "label": "Costa Rica",
      "label_int": "Costa Rica",
      "value": "CR"
    },
    {
      "gentilico": "croata",
      "label": "Croácia",
      "label_int": "Croatia",
      "value": "HR"
    },
    {
      "gentilico": "cubana",
      "label": "Cuba",
      "label_int": "Cuba",
      "value": "CU"
    },
    {
      "gentilico": "curaçauense",
      "label": "Curaçao",
      "label_int": "Curaçao",
      "value": "CW"
    },
    {
      "gentilico": "chagositano",
      "label": "Diego Garcia",
      "label_int": "Diego Garcia",
      "value": "DG"
    },
    {
      "gentilico": "dinamarquesa",
      "label": "Dinamarca",
      "label_int": "Denmark",
      "value": "DK"
    },
    {
      "gentilico": "djibutiana",
      "label": "Djibuti",
      "label_int": "Djibouti",
      "value": "DJ"
    },
    {
      "gentilico": "dominiquense",
      "label": "Dominica",
      "label_int": "Dominica",
      "value": "DM"
    },
    {
      "gentilico": "egípcia",
      "label": "Egito",
      "label_int": "Egypt",
      "value": "EG"
    },
    {
      "gentilico": "salvadorenha",
      "label": "El Salvador",
      "label_int": "El Salvador",
      "value": "SV"
    },
    {
      "gentilico": "árabe",
      "label": "Emirados Árabes Unidos",
      "label_int": "United Arab Emirates",
      "value": "AE"
    },
    {
      "gentilico": "equatoriana",
      "label": "Equador",
      "label_int": "Ecuador",
      "value": "EC"
    },
    {
      "gentilico": "eritreia",
      "label": "Eritréia",
      "label_int": "Eritrea",
      "value": "ER"
    },
    {
      "gentilico": "eslovaco",
      "label": "Eslováquia",
      "label_int": "Slovakia",
      "value": "SK"
    },
    {
      "gentilico": "esloveno",
      "label": "Eslovênia",
      "label_int": "Slovenia",
      "value": "SI"
    },
    {
      "gentilico": "espanhola",
      "label": "Espanha",
      "label_int": "Spain",
      "value": "ES"
    },
    {
      "gentilico": "norte-americana",
      "label": "Estados Unidos",
      "label_int": "United States",
      "value": "US"
    },
    {
      "gentilico": "estoniana",
      "label": "Estônia",
      "label_int": "Estonia",
      "value": "EE"
    },
    {
      "gentilico": "etíope",
      "label": "Etiópia",
      "label_int": "Ethiopia",
      "value": "ET"
    },
    {
      "gentilico": "fijiana",
      "label": "Fiji",
      "label_int": "Fiji",
      "value": "FJ"
    },
    {
      "gentilico": "filipina",
      "label": "Filipinas",
      "label_int": "Philippines",
      "value": "PH"
    },
    {
      "gentilico": "finlandesa",
      "label": "Finlândia",
      "label_int": "Finland",
      "value": "FI"
    },
    {
      "gentilico": "francesa",
      "label": "França",
      "label_int": "France",
      "value": "FR"
    },
    {
      "gentilico": "gabonesa",
      "label": "Gabão",
      "label_int": "Gabon",
      "value": "GA"
    },
    {
      "gentilico": "gambiana",
      "label": "Gâmbia",
      "label_int": "Gambia",
      "value": "GM"
    },
    {
      "gentilico": "ganense",
      "label": "Gana",
      "label_int": "Ghana",
      "value": "GH"
    },
    {
      "gentilico": "georgiana",
      "label": "Geórgia",
      "label_int": "Georgia",
      "value": "GE"
    },
    {
      "gentilico": "gibraltariana",
      "label": "Gibraltar",
      "label_int": "Gibraltar",
      "value": "GI"
    },
    {
      "gentilico": "inglesa",
      "label": "Grã-Bretanha (Reino Unido, UK)",
      "label_int": "United Kingdom",
      "value": "GB"
    },
    {
      "gentilico": "granadina",
      "label": "Granada",
      "label_int": "Grenada",
      "value": "GD"
    },
    {
      "gentilico": "grega",
      "label": "Grécia",
      "label_int": "Greece",
      "value": "GR"
    },
    {
      "gentilico": "groenlandesa",
      "label": "Groelândia",
      "label_int": "Greenland",
      "value": "GL"
    },
    {
      "gentilico": "guadalupense",
      "label": "Guadalupe",
      "label_int": "Guadeloupe",
      "value": "GP"
    },
    {
      "gentilico": "guamês",
      "label": "Guam (Território dos Estados Unidos)",
      "label_int": "Guam",
      "value": "GU"
    },
    {
      "gentilico": "guatemalteca",
      "label": "Guatemala",
      "label_int": "Guatemala",
      "value": "GT"
    },
    {
      "gentilico": "guernesiano",
      "label": "Guernsey",
      "label_int": "Guernsey",
      "value": "GG"
    },
    {
      "gentilico": "guianense",
      "label": "Guiana",
      "label_int": "Guyana",
      "value": "GY"
    },
    {
      "gentilico": "franco-guianense",
      "label": "Guiana Francesa",
      "label_int": "French Guiana",
      "value": "GF"
    },
    {
      "gentilico": "guinéu-equatoriano ou equatoguineana",
      "label": "Guiné",
      "label_int": "Guinea",
      "value": "GN"
    },
    {
      "gentilico": "guinéu-equatoriano",
      "label": "Guiné Equatorial",
      "label_int": "Equatorial Guinea",
      "value": "GQ"
    },
    {
      "gentilico": "guineense",
      "label": "Guiné-Bissau",
      "label_int": "Guinea-Bissau",
      "value": "GW"
    },
    {
      "gentilico": "haitiana",
      "label": "Haiti",
      "label_int": "Haiti",
      "value": "HT"
    },
    {
      "gentilico": "holandês",
      "label": "Holanda",
      "label_int": "Netherlands",
      "value": "NL"
    },
    {
      "gentilico": "hondurenha",
      "label": "Honduras",
      "label_int": "Honduras",
      "value": "HN"
    },
    {
      "gentilico": "hong-konguiana ou chinesa",
      "label": "Hong Kong",
      "label_int": "Hong Kong",
      "value": "HK"
    },
    {
      "gentilico": "húngara",
      "label": "Hungria",
      "label_int": "Hungary",
      "value": "HU"
    },
    {
      "gentilico": "iemenita",
      "label": "Iêmen",
      "label_int": "Yemen",
      "value": "YE"
    },
    {
      "gentilico": "da ilha bouvet",
      "label": "Ilha Bouvet",
      "label_int": "Bouvet Island",
      "value": "BV"
    },
    {
      "gentilico": "da ilha de ascensão",
      "label": "Ilha de Ascensão",
      "label_int": "Ascension Island",
      "value": "AC"
    },
    {
      "gentilico": "da ilha de clipperton",
      "label": "Ilha de Clipperton",
      "label_int": "Clipperton Island",
      "value": "CP"
    },
    {
      "gentilico": "manês",
      "label": "Ilha de Man",
      "label_int": "Isle of Man",
      "value": "IM"
    },
    {
      "gentilico": "natalense",
      "label": "Ilha Natal",
      "label_int": "Christmas Island",
      "value": "CX"
    },
    {
      "gentilico": "pitcairnense",
      "label": "Ilha Pitcairn",
      "label_int": "Pitcairn Islands",
      "value": "PN"
    },
    {
      "gentilico": "reunionense",
      "label": "Ilha Reunião",
      "label_int": "Réunion",
      "value": "RE"
    },
    {
      "gentilico": "alandês",
      "label": "Ilhas Aland",
      "label_int": "Åland Islands",
      "value": "AX"
    },
    {
      "gentilico": "caimanês",
      "label": "Ilhas Cayman",
      "label_int": "Cayman Islands",
      "value": "KY"
    },
    {
      "gentilico": "coquense",
      "label": "Ilhas Cocos",
      "label_int": "Cocos (Keeling) Islands",
      "value": "CC"
    },
    {
      "gentilico": "cookense",
      "label": "Ilhas Cook",
      "label_int": "Cook Islands",
      "value": "CK"
    },
    {
      "gentilico": "faroense",
      "label": "Ilhas Faroes",
      "label_int": "Faroe Islands",
      "value": "FO"
    },
    {
      "gentilico": "das ilhas geórgia do sul e sandwich do sul",
      "label": "Ilhas Geórgia do Sul e Sandwich do Sul",
      "label_int": "South Georgia & South Sandwich Islands",
      "value": "GS"
    },
    {
      "gentilico": "das ilhas heard e mcdonald",
      "label": "Ilhas Heard e McDonald (Território da Austrália)",
      "label_int": "Heard & McDonald Islands",
      "value": "HM"
    },
    {
      "gentilico": "malvinense",
      "label": "Ilhas Malvinas",
      "label_int": "Falkland Islands (Islas Malvinas)",
      "value": "FK"
    },
    {
      "gentilico": "norte-marianense",
      "label": "Ilhas Marianas do Norte",
      "label_int": "Northern Mariana Islands",
      "value": "MP"
    },
    {
      "gentilico": "marshallino",
      "label": "Ilhas Marshall",
      "label_int": "Marshall Islands",
      "value": "MH"
    },
    {
      "gentilico": "das ilhas menores afastadas",
      "label": "Ilhas Menores dos Estados Unidos",
      "label_int": "U.S. Outlying Islands",
      "value": "UM"
    },
    {
      "gentilico": "norfolquino",
      "label": "Ilhas Norfolk",
      "label_int": "Norfolk Island",
      "value": "NF"
    },
    {
      "gentilico": "salomônico",
      "label": "Ilhas Salomão",
      "label_int": "Solomon Islands",
      "value": "SB"
    },
    {
      "gentilico": "seichelense",
      "label": "Ilhas Seychelles",
      "label_int": "Seychelles",
      "value": "SC"
    },
    {
      "gentilico": "toquelauano",
      "label": "Ilhas Tokelau",
      "label_int": "Tokelau",
      "value": "TK"
    },
    {
      "gentilico": "turquês",
      "label": "Ilhas Turks e Caicos",
      "label_int": "Turks & Caicos Islands",
      "value": "TC"
    },
    {
      "gentilico": "virginense",
      "label": "Ilhas Virgens (Estados Unidos)",
      "label_int": "U.S. Virgin Islands",
      "value": "VI"
    },
    {
      "gentilico": "virginense",
      "label": "Ilhas Virgens (Inglaterra)",
      "label_int": "British Virgin Islands",
      "value": "VG"
    },
    {
      "gentilico": "indiano",
      "label": "Índia",
      "label_int": "India",
      "value": "IN"
    },
    {
      "gentilico": "indonésia",
      "label": "Indonésia",
      "label_int": "Indonesia",
      "value": "ID"
    },
    {
      "gentilico": "iraniano",
      "label": "Irã",
      "label_int": "Iran",
      "value": "IR"
    },
    {
      "gentilico": "iraquiana",
      "label": "Iraque",
      "label_int": "Iraq",
      "value": "IQ"
    },
    {
      "gentilico": "irlandesa",
      "label": "Irlanda",
      "label_int": "Ireland",
      "value": "IE"
    },
    {
      "gentilico": "islandesa",
      "label": "Islândia",
      "label_int": "Iceland",
      "value": "IS"
    },
    {
      "gentilico": "israelense",
      "label": "Israel",
      "label_int": "Israel",
      "value": "IL"
    },
    {
      "gentilico": "italiana",
      "label": "Itália",
      "label_int": "Italy",
      "value": "IT"
    },
    {
      "gentilico": "jamaicana",
      "label": "Jamaica",
      "label_int": "Jamaica",
      "value": "JM"
    },
    {
      "gentilico": "japonesa",
      "label": "Japão",
      "label_int": "Japan",
      "value": "JP"
    },
    {
      "gentilico": "canalina",
      "label": "Jersey",
      "label_int": "Jersey",
      "value": "JE"
    },
    {
      "gentilico": "jordaniana",
      "label": "Jordânia",
      "label_int": "Jordan",
      "value": "JO"
    },
    {
      "gentilico": "kiribatiana",
      "label": "Kiribati",
      "label_int": "Kiribati",
      "value": "KI"
    },
    {
      "gentilico": "kosovar",
      "label": "Kosovo",
      "label_int": "Kosovo",
      "value": "XK"
    },
    {
      "gentilico": "kuwaitiano",
      "label": "Kuait",
      "label_int": "Kuwait",
      "value": "KW"
    },
    {
      "gentilico": "laosiana",
      "label": "Laos",
      "label_int": "Laos",
      "value": "LA"
    },
    {
      "gentilico": "lesota",
      "label": "Lesoto",
      "label_int": "Lesotho",
      "value": "LS"
    },
    {
      "gentilico": "letão",
      "label": "Letônia",
      "label_int": "Latvia",
      "value": "LV"
    },
    {
      "gentilico": "libanesa",
      "label": "Líbano",
      "label_int": "Lebanon",
      "value": "LB"
    },
    {
      "gentilico": "liberiana",
      "label": "Libéria",
      "label_int": "Liberia",
      "value": "LR"
    },
    {
      "gentilico": "líbia",
      "label": "Líbia",
      "label_int": "Libya",
      "value": "LY"
    },
    {
      "gentilico": "liechtensteiniense",
      "label": "Liechtenstein",
      "label_int": "Liechtenstein",
      "value": "LI"
    },
    {
      "gentilico": "lituana",
      "label": "Lituânia",
      "label_int": "Lithuania",
      "value": "LT"
    },
    {
      "gentilico": "luxemburguesa",
      "label": "Luxemburgo",
      "label_int": "Luxembourg",
      "value": "LU"
    },
    {
      "gentilico": "macauense",
      "label": "Macau",
      "label_int": "Macau",
      "value": "MO"
    },
    {
      "gentilico": "macedônio",
      "label": "Macedônia (República Yugoslava)",
      "label_int": "Macedonia (FYROM)",
      "value": "MK"
    },
    {
      "gentilico": "malgaxe",
      "label": "Madagascar",
      "label_int": "Madagascar",
      "value": "MG"
    },
    {
      "gentilico": "malaia",
      "label": "Malásia",
      "label_int": "Malaysia",
      "value": "MY"
    },
    {
      "gentilico": "malauiano",
      "label": "Malaui",
      "label_int": "Malawi",
      "value": "MW"
    },
    {
      "gentilico": "maldívia",
      "label": "Maldivas",
      "label_int": "Maldives",
      "value": "MV"
    },
    {
      "gentilico": "malinesa",
      "label": "Mali",
      "label_int": "Mali",
      "value": "ML"
    },
    {
      "gentilico": "maltesa",
      "label": "Malta",
      "label_int": "Malta",
      "value": "MT"
    },
    {
      "gentilico": "marroquina",
      "label": "Marrocos",
      "label_int": "Morocco",
      "value": "MA"
    },
    {
      "gentilico": "martiniquense",
      "label": "Martinica",
      "label_int": "Martinique",
      "value": "MQ"
    },
    {
      "gentilico": "mauriciana",
      "label": "Maurício",
      "label_int": "Mauritius",
      "value": "MU"
    },
    {
      "gentilico": "mauritana",
      "label": "Mauritânia",
      "label_int": "Mauritania",
      "value": "MR"
    },
    {
      "gentilico": "maiotense",
      "label": "Mayotte",
      "label_int": "Mayotte",
      "value": "YT"
    },
    {
      "gentilico": "mexicana",
      "label": "México",
      "label_int": "Mexico",
      "value": "MX"
    },
    {
      "gentilico": "micronésia",
      "label": "Micronésia",
      "label_int": "Micronesia",
      "value": "FM"
    },
    {
      "gentilico": "moçambicana",
      "label": "Moçambique",
      "label_int": "Mozambique",
      "value": "MZ"
    },
    {
      "gentilico": "moldavo",
      "label": "Moldova",
      "label_int": "Moldova",
      "value": "MD"
    },
    {
      "gentilico": "monegasca",
      "label": "Mônaco",
      "label_int": "Monaco",
      "value": "MC"
    },
    {
      "gentilico": "mongol",
      "label": "Mongólia",
      "label_int": "Mongolia",
      "value": "MN"
    },
    {
      "gentilico": "montenegra",
      "label": "Montenegro",
      "label_int": "Montenegro",
      "value": "ME"
    },
    {
      "gentilico": "montserratiano",
      "label": "Montserrat",
      "label_int": "Montserrat",
      "value": "MS"
    },
    {
      "gentilico": "birmanês",
      "label": "Myanma",
      "label_int": "Myanmar (Burma)",
      "value": "MM"
    },
    {
      "gentilico": "namíbia",
      "label": "Namíbia",
      "label_int": "Namibia",
      "value": "NA"
    },
    {
      "gentilico": "nauruana",
      "label": "Nauru",
      "label_int": "Nauru",
      "value": "NR"
    },
    {
      "gentilico": "nepalesa",
      "label": "Nepal",
      "label_int": "Nepal",
      "value": "NP"
    },
    {
      "gentilico": "nicaraguense",
      "label": "Nicarágua",
      "label_int": "Nicaragua",
      "value": "NI"
    },
    {
      "gentilico": "nigerina",
      "label": "Níger",
      "label_int": "Niger",
      "value": "NE"
    },
    {
      "gentilico": "nigeriana",
      "label": "Nigéria",
      "label_int": "Nigeria",
      "value": "NG"
    },
    {
      "gentilico": "niueana",
      "label": "Niue",
      "label_int": "Niue",
      "value": "NU"
    },
    {
      "gentilico": "norueguesa",
      "label": "Noruega",
      "label_int": "Norway",
      "value": "NO"
    },
    {
      "gentilico": "caledônia",
      "label": "Nova Caledônia",
      "label_int": "New Caledonia",
      "value": "NC"
    },
    {
      "gentilico": "neozelandesa",
      "label": "Nova Zelândia",
      "label_int": "New Zealand",
      "value": "NZ"
    },
    {
      "gentilico": "omani",
      "label": "Omã",
      "label_int": "Oman",
      "value": "OM"
    },
    {
      "gentilico": "dos países baixos caribenhos",
      "label": "Países Baixos Caribenhos",
      "label_int": "Caribbean Netherlands",
      "value": "BQ"
    },
    {
      "gentilico": "palauense",
      "label": "Palau",
      "label_int": "Palau",
      "value": "PW"
    },
    {
      "gentilico": "palestino",
      "label": "Palestina",
      "label_int": "Palestine",
      "value": "PS"
    },
    {
      "gentilico": "zona do canal do panamá",
      "label": "Panamá",
      "label_int": "Panama",
      "value": "PA"
    },
    {
      "gentilico": "pauásia",
      "label": "Papua-Nova Guiné",
      "label_int": "Papua New Guinea",
      "value": "PG"
    },
    {
      "gentilico": "paquistanesa",
      "label": "Paquistão",
      "label_int": "Pakistan",
      "value": "PK"
    },
    {
      "gentilico": "paraguaia",
      "label": "Paraguai",
      "label_int": "Paraguay",
      "value": "PY"
    },
    {
      "gentilico": "peruana",
      "label": "Peru",
      "label_int": "Peru",
      "value": "PE"
    },
    {
      "gentilico": "franco-polinésia",
      "label": "Polinésia Francesa",
      "label_int": "French Polynesia",
      "value": "PF"
    },
    {
      "gentilico": "polonesa",
      "label": "Polônia",
      "label_int": "Poland",
      "value": "PL"
    },
    {
      "gentilico": "portorriquenha",
      "label": "Porto Rico",
      "label_int": "Puerto Rico",
      "value": "PR"
    },
    {
      "gentilico": "portuguesa",
      "label": "Portugal",
      "label_int": "Portugal",
      "value": "PT"
    },
    {
      "gentilico": "catarense",
      "label": "Qatar",
      "label_int": "Qatar",
      "value": "QA"
    },
    {
      "gentilico": "queniano",
      "label": "Quênia",
      "label_int": "Kenya",
      "value": "KE"
    },
    {
      "gentilico": "quirguiz",
      "label": "Quirguistão",
      "label_int": "Kyrgyzstan",
      "value": "KG"
    },
    {
      "gentilico": "centro-africana",
      "label": "República Centro-Africana",
      "label_int": "Central African Republic",
      "value": "CF"
    },
    {
      "gentilico": "congolesa",
      "label": "República Democrática do Congo",
      "label_int": "Congo (DRC)",
      "value": "CD"
    },
    {
      "gentilico": "dominicana",
      "label": "República Dominicana",
      "label_int": "Dominican Republic",
      "value": "DO"
    },
    {
      "gentilico": "tcheco",
      "label": "República Tcheca",
      "label_int": "Czech Republic",
      "value": "CZ"
    },
    {
      "gentilico": "romena",
      "label": "Romênia",
      "label_int": "Romania",
      "value": "RO"
    },
    {
      "gentilico": "ruandesa",
      "label": "Ruanda",
      "label_int": "Rwanda",
      "value": "RW"
    },
    {
      "gentilico": "russa",
      "label": "Rússia (antiga URSS) - Federação Russa",
      "label_int": "Russia",
      "value": "RU"
    },
    {
      "gentilico": "saariano",
      "label": "Saara Ocidental",
      "label_int": "Western Sahara",
      "value": "EH"
    },
    {
      "gentilico": "pedro-miquelonense",
      "label": "Saint-Pierre e Miquelon",
      "label_int": "St. Pierre & Miquelon",
      "value": "PM"
    },
    {
      "gentilico": "samoana",
      "label": "Samoa Americana",
      "label_int": "American Samoa",
      "value": "AS"
    },
    {
      "gentilico": "samoano",
      "label": "Samoa Ocidental",
      "label_int": "Samoa",
      "value": "WS"
    },
    {
      "gentilico": "samarinês",
      "label": "San Marino",
      "label_int": "San Marino",
      "value": "SM"
    },
    {
      "gentilico": "helenense",
      "label": "Santa Helena",
      "label_int": "St. Helena",
      "value": "SH"
    },
    {
      "gentilico": "santa-lucense",
      "label": "Santa Lúcia",
      "label_int": "St. Lucia",
      "value": "LC"
    },
    {
      "gentilico": "são-bartolomeense",
      "label": "São Bartolomeu",
      "label_int": "St. Barthélemy",
      "value": "BL"
    },
    {
      "gentilico": "são-cristovense",
      "label": "São Cristóvão e Névis",
      "label_int": "St. Kitts & Nevis",
      "value": "KN"
    },
    {
      "gentilico": "são-martinhense",
      "label": "São Martim",
      "label_int": "St. Martin",
      "value": "MF"
    },
    {
      "gentilico": "são-martinhense",
      "label": "São Martinho",
      "label_int": "Sint Maarten",
      "value": "SX"
    },
    {
      "gentilico": "são-tomense",
      "label": "São Tomé e Príncipe",
      "label_int": "São Tomé & Príncipe",
      "value": "ST"
    },
    {
      "gentilico": "sao-vicentino",
      "label": "São Vicente e Granadinas",
      "label_int": "St. Vincent & Grenadines",
      "value": "VC"
    },
    {
      "gentilico": "senegalesa",
      "label": "Senegal",
      "label_int": "Senegal",
      "value": "SN"
    },
    {
      "gentilico": "leonesa",
      "label": "Serra Leoa",
      "label_int": "Sierra Leone",
      "value": "SL"
    },
    {
      "gentilico": "sérvia",
      "label": "Sérvia",
      "label_int": "Serbia",
      "value": "RS"
    },
    {
      "gentilico": "síria",
      "label": "Síria",
      "label_int": "Syria",
      "value": "SY"
    },
    {
      "gentilico": "somali",
      "label": "Somália",
      "label_int": "Somalia",
      "value": "SO"
    },
    {
      "gentilico": "cingalesa",
      "label": "Sri Lanka",
      "label_int": "Sri Lanka",
      "value": "LK"
    },
    {
      "gentilico": "suazi",
      "label": "Suazilândia",
      "label_int": "Swaziland",
      "value": "SZ"
    },
    {
      "gentilico": "sudanesa",
      "label": "Sudão",
      "label_int": "Sudan",
      "value": "SD"
    },
    {
      "gentilico": "sul-sudanês",
      "label": "Sudão do Sul",
      "label_int": "South Sudan",
      "value": "SS"
    },
    {
      "gentilico": "sueca",
      "label": "Suécia",
      "label_int": "Sweden",
      "value": "SE"
    },
    {
      "gentilico": "suíça",
      "label": "Suíça",
      "label_int": "Switzerland",
      "value": "CH"
    },
    {
      "gentilico": "surinamesa",
      "label": "Suriname",
      "label_int": "Suriname",
      "value": "SR"
    },
    {
      "gentilico": "svalbardense",
      "label": "Svalbard",
      "label_int": "Svalbard & Jan Mayen",
      "value": "SJ"
    },
    {
      "gentilico": "tadjique",
      "label": "Tadjiquistão",
      "label_int": "Tajikistan",
      "value": "TJ"
    },
    {
      "gentilico": "tailandesa",
      "label": "Tailândia",
      "label_int": "Thailand",
      "value": "TH"
    },
    {
      "gentilico": "taiwanês",
      "label": "Taiwan",
      "label_int": "Taiwan",
      "value": "TW"
    },
    {
      "gentilico": "tanzaniana",
      "label": "Tanzânia",
      "label_int": "Tanzania",
      "value": "TZ"
    },
    {
      "gentilico": "do território britânico do oceano índico",
      "label": "Território Britânico do Oceano índico",
      "label_int": "British Indian Ocean Territory",
      "value": "IO"
    },
    {
      "gentilico": "do territórios do sul da frança",
      "label": "Territórios do Sul da França",
      "label_int": "French Southern Territories",
      "value": "TF"
    },
    {
      "gentilico": "timorense",
      "label": "Timor-Leste",
      "label_int": "Timor-Leste",
      "value": "TL"
    },
    {
      "gentilico": "togolesa",
      "label": "Togo",
      "label_int": "Togo",
      "value": "TG"
    },
    {
      "gentilico": "tonganesa",
      "label": "Tonga",
      "label_int": "Tonga",
      "value": "TO"
    },
    {
      "gentilico": "trinitário-tobagense",
      "label": "Trinidad e Tobago",
      "label_int": "Trinidad & Tobago",
      "value": "TT"
    },
    {
      "gentilico": "tristanita",
      "label": "Tristão da Cunha",
      "label_int": "Tristan da Cunha",
      "value": "TA"
    },
    {
      "gentilico": "tunisiana",
      "label": "Tunísia",
      "label_int": "Tunisia",
      "value": "TN"
    },
    {
      "gentilico": "turcomana",
      "label": "Turcomenistão",
      "label_int": "Turkmenistan",
      "value": "TM"
    },
    {
      "gentilico": "turca",
      "label": "Turquia",
      "label_int": "Turkey",
      "value": "TR"
    },
    {
      "gentilico": "tuvaluana",
      "label": "Tuvalu",
      "label_int": "Tuvalu",
      "value": "TV"
    },
    {
      "gentilico": "ucraniana",
      "label": "Ucrânia",
      "label_int": "Ukraine",
      "value": "UA"
    },
    {
      "gentilico": "ugandense",
      "label": "Uganda",
      "label_int": "Uganda",
      "value": "UG"
    },
    {
      "gentilico": "uruguaia",
      "label": "Uruguai",
      "label_int": "Uruguay",
      "value": "UY"
    },
    {
      "gentilico": "uzbeque",
      "label": "Uzbequistão",
      "label_int": "Uzbekistan",
      "value": "UZ"
    },
    {
      "gentilico": "vanuatuense",
      "label": "Vanuatu",
      "label_int": "Vanuatu",
      "value": "VU"
    },
    {
      "gentilico": "vaticano",
      "label": "Vaticano",
      "label_int": "Vatican City",
      "value": "VA"
    },
    {
      "gentilico": "venezuelana",
      "label": "Venezuela",
      "label_int": "Venezuela",
      "value": "VE"
    },
    {
      "gentilico": "vietnamita",
      "label": "Vietnã",
      "label_int": "Vietnam",
      "value": "VN"
    },
    {
      "gentilico": "wallis-futunense",
      "label": "Wallis e Futuna",
      "label_int": "Wallis & Futuna",
      "value": "WF"
    },
    {
      "gentilico": "zambiana",
      "label": "Zâmbia",
      "label_int": "Zambia",
      "value": "ZM"
    },
    {
      "gentilico": "zimbabuana",
      "label": "Zimbábue",
      "label_int": "Zimbabwe",
      "value": "ZW"
    }
  ];

  const animatedComponents = makeAnimated();

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption.label);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      id="country"
      value={{ label: selectedOption }}
      onChange={handleChange}
      options={options}
      components={animatedComponents}
      isSearchable
      onInputChange
      placeholder="informe seu e-mail" required
    />
  )
}

export default SelectCountry
