import { CountryCode } from "libphonenumber-js";

/**
 * Interface composée de :
 * * `code` *(CountryCode)* : Le code pays en norme `ISO 3166-1 alpha-2`, e.g. Pour la France on aura "FR", pour le Luxembourg, on aura LU, ...
 * * `name?` *(string)* : Le nom du pays donné e français.
 */
export interface IFrenchCountryList {
    
    /** Le code pays en norme `ISO 3166-1 alpha-2`, e.g. Pour la France on aura "FR", pour le Luxembourg, on aura LU, ... */
    code: CountryCode,
    /** Le nom du pays donné e français. */
    name: string

}

/**
 * Liste des pays en français accompagné du code en norme ISO 3166-1 alpha-2
 * 
 * ---
 * ---
 * 
 * `IFrenchCountryList`: Interface composée de :
 * * `code` *(CountryCode)* : Le code pays en norme `ISO 3166-1 alpha-2`, e.g. Pour la France on aura "FR", pour le Luxembourg, on aura LU, ...
 * * `name?` *(string)* : Le nom du pays donné e français.
 * 
 * ---
 * ---
 */
 export const frenchCountries: IFrenchCountryList[] = [
	{code: "AD", name: "Andorre"},
	{code: "AE", name: "Émirats Arabes Unis"},
	{code: "AF", name: "Afghanistan"},
	{code: "AG", name: "Antigua-Et-Barbuda"},
	{code: "AI", name: "Anguilla"},
	{code: "AL", name: "Albanie"},
	{code: "AM", name: "Arménie"},
	{code: "AO", name: "Angola"},
	{code: "AR", name: "Argentine"},
	{code: "AS", name: "Samoa Américaines"},
	{code: "AT", name: "Autriche"},
	{code: "AU", name: "Australie"},
	{code: "AW", name: "Aruba"},
	{code: "AX", name: "Îles Åland"},
	{code: "AZ", name: "Azerbaïdjan"},
	{code: "BA", name: "Bosnie-Herzégovine"},
	{code: "BB", name: "Barbad"},
	{code: "BD", name: "Bangladesh"},
	{code: "BE", name: "Belgique"},
	{code: "BF", name: "Burkina Faso"},
	{code: "BG", name: "Bulgarie"},
	{code: "BH", name: "Bahreïn"},
	{code: "BI", name: "Burundi"},
	{code: "BJ", name: "Bénin"},
	{code: "BL", name: "Saint-Barthélemy"},
	{code: "BM", name: "Bermudes"},
	{code: "BN", name: "Brunei Darussalam"},
	{code: "BO", name: "État Plurinational De Bolivie"},
	{code: "BQ", name: "Bonaire, Saint-Eustache Et Saba"},
	{code: "BR", name: "Brésil"},
	{code: "BS", name: "Bahamas"},
	{code: "BT", name: "Bhoutan"},
	{code: "BW", name: "Botswana"},
	{code: "BY", name: "Biélorussie"},
	{code: "BZ", name: "Belize"},
	{code: "CA", name: "Canada"},
	{code: "CC", name: "Îles Cocos"},
	{code: "CD", name: "République Démocratique Du Congo"},
	{code: "CF", name: "République Centrafricaine"},
	{code: "CG", name: "Congo"},
	{code: "CH", name: "Suisse"},
	{code: "CI", name: "Côte D'Ivoire"},
	{code: "CK", name: "Îles Cook"},
	{code: "CL", name: "Chili"},
	{code: "CM", name: "Cameroun"},
	{code: "CN", name: "Chine"},
	{code: "CO", name: "Colombie"},
	{code: "CR", name: "Costa Rica"},
	{code: "CU", name: "Cuba"},
	{code: "CV", name: "Cap-Vert"},
	{code: "CW", name: "Curaçao"},
	{code: "CX", name: "Île Christmas"},
	{code: "CY", name: "Chypre"},
	{code: "CZ", name: "République Tchèque"},
	{code: "DE", name: "Allemagne"},
	{code: "DJ", name: "Djibouti"},
	{code: "DK", name: "Denmark"},
	{code: "DM", name: "Dominique"},
	{code: "DO", name: "République Dominicaine"},
	{code: "DZ", name: "Algérie"},
	{code: "EC", name: "Équateur"},
	{code: "EE", name: "Estonie"},
	{code: "EG", name: "Égypte"},
	{code: "EH", name: "Sahara Occidental"},
	{code: "ER", name: "Érythrée"},
	{code: "ES", name: "Espagne"},
	{code: "ET", name: "Éthiopie"},
	{code: "FI", name: "Finlande"},
	{code: "FJ", name: "Fidji"},
	{code: "FK", name: "Îles Malouines"},
	{code: "FM", name: "États Fédérés De Micronésie"},
	{code: "FO", name: "Îles Féroé"},
	{code: "FR", name: "France"},
	{code: "GA", name: "Gabon"},
	{code: "GB", name: "Royaume-Uni"},
	{code: "GD", name: "Grenade"},
	{code: "GE", name: "Géorgie"},
	{code: "GF", name: "Guyane"},
	{code: "GG", name: "Guernesey"},
	{code: "GH", name: "Ghana"},
	{code: "GI", name: "Gibraltar"},
	{code: "GL", name: "Groenland"},
	{code: "GM", name: "Gambie"},
	{code: "GN", name: "Guinée"},
	{code: "GP", name: "Guadeloupe"},
	{code: "GQ", name: "Guinée Équatoriale"},
	{code: "GR", name: "Grèce"},
	{code: "GT", name: "Guatemala"},
	{code: "GU", name: "Guam"},
	{code: "GW", name: "Guinée-Bissau"},
	{code: "GY", name: "Guyana"},
	{code: "HK", name: "Hong Kong"},
	{code: "HN", name: "Honduras"},
	{code: "HR", name: "Croatie"},
	{code: "HT", name: "Haïti"},
	{code: "HU", name: "Hongrie"},
	{code: "ID", name: "Indonésie"},
	{code: "IE", name: "Irlande"},
	{code: "IL", name: "Israël"},
	{code: "IM", name: "Île De Man"},
	{code: "IN", name: "Inde"},
	{code: "IO", name: "Territoire Britannique De L'océan Indien"},
	{code: "IQ", name: "Irak"},
	{code: "IR", name: "République Islamique D'Iran"},
	{code: "IS", name: "Islande"},
	{code: "IT", name: "Italie"},
	{code: "JE", name: "Jersey"},
	{code: "JM", name: "Jamaïque"},
	{code: "JO", name: "Jordanie"},
	{code: "JP", name: "Japon"},
	{code: "KE", name: "Kenya"},
	{code: "KG", name: "Kirghizistan"},
	{code: "KH", name: "Cambodge"},
	{code: "KI", name: "Kiribati"},
	{code: "KM", name: "Comores"},
	{code: "KN", name: "Saint-Christophe-et-Niévès"},
	{code: "KP", name: "République Populaire Démocratique De Corée"},
	{code: "KR", name: "République De Corée"},
	{code: "KW", name: "Koweït"},
	{code: "KY", name: "Îles Caïmans"},
	{code: "KZ", name: "Kazakhstan"},
	{code: "LA", name: "République Démocratique Populaire Lao"},
	{code: "LB", name: "Liban"},
	{code: "LC", name: "Sainte-Lucie"},
	{code: "LI", name: "Liechtenstein"},
	{code: "LK", name: "Sri Lanka"},
	{code: "LR", name: "Liberia"},
	{code: "LS", name: "Lesotho"},
	{code: "LT", name: "Lituanie"},
	{code: "LU", name: "Luxembourg"},
	{code: "LV", name: "Lettonie"},
	{code: "LY", name: "Libye"},
	{code: "MA", name: "Maroc"},
	{code: "MC", name: "Monaco"},
	{code: "MD", name: "République De Moldavie"},
	{code: "ME", name: "Monténégro"},
	{code: "MF", name: "Saint-Martin (Partie Française)"},
	{code: "MG", name: "Madagascar"},
	{code: "MH", name: "Îles Marshall"},
	{code: "MK", name: "Macédoine"},
	{code: "ML", name: "Mali"},
	{code: "MM", name: "Birmanie"},
	{code: "MN", name: "Mongolie"},
	{code: "MO", name: "Macao"},
	{code: "MP", name: "Îles Mariannes Du Nord"},
	{code: "MQ", name: "Martinique"},
	{code: "MR", name: "Mauritanie"},
	{code: "MS", name: "Montserrat"},
	{code: "MT", name: "Malte"},
	{code: "MU", name: "Maurice"},
	{code: "MV", name: "Maldives"},
	{code: "MW", name: "Malawi"},
	{code: "MX", name: "Mexique"},
	{code: "MY", name: "Malaisie"},
	{code: "MZ", name: "Mozambique"},
	{code: "NA", name: "Namibie"},
	{code: "NC", name: "Nouvelle-Calédonie"},
	{code: "NE", name: "Niger"},
	{code: "NF", name: "Île Norfolk"},
	{code: "NG", name: "Nigéria"},
	{code: "NI", name: "Nicaragua"},
	{code: "NL", name: "Pays-Bas"},
	{code: "NO", name: "Norvège"},
	{code: "NP", name: "Népal"},
	{code: "NR", name: "Nauru"},
	{code: "NU", name: "Niue"},
	{code: "NZ", name: "Nouvelle-Zélande"},
	{code: "OM", name: "Oman"},
	{code: "PA", name: "Panama"},
	{code: "PE", name: "Pérou"},
	{code: "PF", name: "Polynésie Française"},
	{code: "PG", name: "Papouasie-Nouvelle-Guinée"},
	{code: "PH", name: "Philippines"},
	{code: "PK", name: "Pakistan"},
	{code: "PL", name: "Pologne"},
	{code: "PM", name: "Saint-Pierre-Et-Miquelon"},
	{code: "PR", name: "Porto Rico"},
	{code: "PS", name: "Territoires Palestiniens Occupés"},
	{code: "PT", name: "Portugal"},
	{code: "PW", name: "Palaos"},
	{code: "PY", name: "Paraguay"},
	{code: "QA", name: "Qatar"},
	{code: "RE", name: "Réunion"},
	{code: "RO", name: "Roumanie"},
	{code: "RS", name: "Serbie"},
	{code: "RU", name: "Fédération De Russie"},
	{code: "RW", name: "Rwanda"},
	{code: "SA", name: "Arabie Saoudite"},
	{code: "SB", name: "Îles Salomon"},
	{code: "SC", name: "Seychelles"},
	{code: "SD", name: "Soudan"},
	{code: "SE", name: "Suède"},
	{code: "SG", name: "Singapour"},
	{code: "SH", name: "Sainte-Hélène"},
	{code: "SI", name: "Slovénie"},
	{code: "SJ", name: "Svalbard Et Jan Mayen"},
	{code: "SK", name: "Slovaquie"},
	{code: "SL", name: "Sierra Leone"},
	{code: "SM", name: "Saint-Marin"},
	{code: "SN", name: "Sénégal"},
	{code: "SO", name: "Somalie"},
	{code: "SR", name: "Suriname"},
	{code: "SS", name: "Soudan Du Sud"},
	{code: "ST", name: "Sao Tomé-Et-Principe"},
	{code: "SV", name: "République Du Salvador"},
	{code: "SX", name: "Saint-Martin (Partie Néerlandaise)"},
	{code: "SY", name: "République Arabe Syrienne"},
	{code: "SZ", name: "Swaziland"},
	{code: "TC", name: "Îles Turks-Et-Caïcos"},
	{code: "TD", name: "Tchad"},
	{code: "TG", name: "Togo"},
	{code: "TH", name: "Thaïlande"},
	{code: "TJ", name: "Tadjikistan"},
	{code: "TK", name: "Tokelau"},
	{code: "TL", name: "Timor-Leste"},
	{code: "TM", name: "Turkménistan"},
	{code: "TN", name: "Tunisie"},
	{code: "TO", name: "Tonga"},
	{code: "TR", name: "Turquie"},
	{code: "TT", name: "Trinité-Et-Tobago"},
	{code: "TV", name: "Tuvalu"},
	{code: "TW", name: "Taïwan"},
	{code: "TZ", name: "République-Unie De Tanzanie"},
	{code: "UA", name: "Ukraine"},
	{code: "UG", name: "Ouganda"},
	{code: "US", name: "États-Unis"},
	{code: "UY", name: "Uruguay"},
	{code: "UZ", name: "Ouzbékistan"},
	{code: "VA", name: "Saint-Siège (État De La Cité Du Vatican)"},
	{code: "VC", name: "Saint-Vincent-Et-Les Grenadines"},
	{code: "VE", name: "Venezuela"},
	{code: "VG", name: "Îles Vierges Britanniques"},
	{code: "VI", name: "Îles Vierges Des États-Unis"},
	{code: "VN", name: "Viet Nam"},
	{code: "VU", name: "Vanuatu"},
	{code: "WF", name: "Wallis Et Futuna"},
	{code: "WS", name: "Samoa"},
	{code: "YE", name: "Yémen"},
	{code: "YT", name: "Mayotte"},
	{code: "ZA", name: "Afrique Du Sud"},
	{code: "ZM", name: "Zambie"},
	{code: "ZW", name: "Zimbabwe"}
]