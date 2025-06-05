param location string = resourceGroup().location
param appServiceName string
param appServicePlanName string

resource plan 'Microsoft.Web/serverfarms@2024-11-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: 'F1'
    tier: 'Free'
  }
}

resource app 'Microsoft.Web/sites@2024-11-01' = {
  name: appServiceName
  location: location
  properties: {
    serverFarmId: plan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
    }
    httpsOnly: true
  }
  kind: 'app,linux'
}
