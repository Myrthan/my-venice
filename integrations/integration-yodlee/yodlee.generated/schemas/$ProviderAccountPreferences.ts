/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProviderAccountPreferences = {
  properties: {
    isDataExtractsEnabled: {
      type: 'boolean',
      description: `Indicates if the updates to the provider account should be part of the data extracts event notification or the data extract data retrieval service.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>`,
    },
    linkedProviderAccountId: {
      type: 'number',
      description: `LinkedproviderAccountd is a providerAccountId linked by the user to the primary provider account. <br>LinkedProviderAccountId and the providerAccountId belongs to the same institution.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li><li>GET Provider Accounts</li></ul>`,
      format: 'int64',
    },
    isAutoRefreshEnabled: {
      type: 'boolean',
      description: `Indicates if auto-refreshes have to be triggered for the provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>`,
    },
  },
} as const
