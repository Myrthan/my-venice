/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Money = {
  amount: number
  convertedAmount?: number
  currency?:
    | 'USD'
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'NZD'
    | 'SGD'
    | 'ZAR'
    | 'CNY'
    | 'VND'
    | 'MYR'
    | 'CHF'
    | 'AED'
    | 'AFA'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AWG'
    | 'AZM'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGL'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CDF'
    | 'CLP'
    | 'COP'
    | 'CRC'
    | 'CUP'
    | 'CVE'
    | 'CYP'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EEK'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'FJD'
    | 'FKP'
    | 'GEL'
    | 'GGP'
    | 'GHC'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'ILS'
    | 'IMP'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGF'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MTL'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MZM'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'ROL'
    | 'RUR'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDD'
    | 'SEK'
    | 'SHP'
    | 'SIT'
    | 'SKK'
    | 'SLL'
    | 'SOS'
    | 'SPL'
    | 'SRG'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJR'
    | 'TMM'
    | 'TND'
    | 'TOP'
    | 'TRL'
    | 'TTD'
    | 'TVD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'UZS'
    | 'VEB'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'YER'
    | 'YUM'
    | 'ZMK'
    | 'ZWD'
    | 'ADP'
    | 'ATS'
    | 'BEF'
    | 'BUK'
    | 'CSD'
    | 'CSK'
    | 'DDM'
    | 'DEM'
    | 'ECS'
    | 'ESP'
    | 'FIM'
    | 'GRD'
    | 'GWP'
    | 'IEP'
    | 'ITL'
    | 'LUF'
    | 'MLF'
    | 'NLG'
    | 'PTE'
    | 'SUR'
    | 'TPE'
    | 'UAK'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XEU'
    | 'XFO'
    | 'XFU'
    | 'XGF'
    | 'XMK'
    | 'XRM'
    | 'XTS'
    | 'YDD'
    | 'YUD'
    | 'ZRN'
    | 'TJS'
    | 'RON'
    | 'BGN'
    | 'BTC'
    | 'XBT'
    | 'CNH'
    | 'RUB'
    | 'TRY'
    | 'GHS'
    | 'TMT'
    | 'ZMW'
    | 'VEF'
    | 'SSP'
    | 'ALK'
  convertedCurrency?:
    | 'USD'
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'NZD'
    | 'SGD'
    | 'ZAR'
    | 'CNY'
    | 'VND'
    | 'MYR'
    | 'CHF'
    | 'AED'
    | 'AFA'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AWG'
    | 'AZM'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGL'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CDF'
    | 'CLP'
    | 'COP'
    | 'CRC'
    | 'CUP'
    | 'CVE'
    | 'CYP'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EEK'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'FJD'
    | 'FKP'
    | 'GEL'
    | 'GGP'
    | 'GHC'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'ILS'
    | 'IMP'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGF'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MTL'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MZM'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'ROL'
    | 'RUR'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDD'
    | 'SEK'
    | 'SHP'
    | 'SIT'
    | 'SKK'
    | 'SLL'
    | 'SOS'
    | 'SPL'
    | 'SRG'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJR'
    | 'TMM'
    | 'TND'
    | 'TOP'
    | 'TRL'
    | 'TTD'
    | 'TVD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'UZS'
    | 'VEB'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'YER'
    | 'YUM'
    | 'ZMK'
    | 'ZWD'
    | 'ADP'
    | 'ATS'
    | 'BEF'
    | 'BUK'
    | 'CSD'
    | 'CSK'
    | 'DDM'
    | 'DEM'
    | 'ECS'
    | 'ESP'
    | 'FIM'
    | 'GRD'
    | 'GWP'
    | 'IEP'
    | 'ITL'
    | 'LUF'
    | 'MLF'
    | 'NLG'
    | 'PTE'
    | 'SUR'
    | 'TPE'
    | 'UAK'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XEU'
    | 'XFO'
    | 'XFU'
    | 'XGF'
    | 'XMK'
    | 'XRM'
    | 'XTS'
    | 'YDD'
    | 'YUD'
    | 'ZRN'
    | 'TJS'
    | 'RON'
    | 'BGN'
    | 'BTC'
    | 'XBT'
    | 'CNH'
    | 'RUB'
    | 'TRY'
    | 'GHS'
    | 'TMT'
    | 'ZMW'
    | 'VEF'
    | 'SSP'
    | 'ALK'
}
