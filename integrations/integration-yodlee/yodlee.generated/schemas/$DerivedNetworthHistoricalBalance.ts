/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DerivedNetworthHistoricalBalance = {
  properties: {
    date: {
      type: 'string',
      description: `Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance. AdditIonal Details: scraped: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates. carryForward : Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc. calculated: Balances that gets calculated for the days that are prior to the account added date.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul>`,
      isReadOnly: true,
    },
    accountId: {
      type: 'number',
      isReadOnly: true,
      format: 'int64',
    },
    isAsset: {
      type: 'boolean',
      description: `Indicates whether the balance is an asset or liability.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>`,
      isReadOnly: true,
    },
    balance: {
      type: 'Money',
      description: `Balance amount of the account.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>`,
      isReadOnly: true,
    },
    asOfDate: {
      type: 'string',
      description: `Date as of when the balance is last  updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>`,
      isReadOnly: true,
    },
    dataSourceType: {
      type: 'Enum',
      isReadOnly: true,
    },
  },
} as const
