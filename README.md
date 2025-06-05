# Azure Resume API — CI/CD with GitHub Actions and Bicep

This project showcases a **fully automated CI/CD pipeline** for deploying a web interface consisting of a Node.js with Express for the backend, and plain HTML/CSS/JavaScript for the frontend, all deployed on Azure App Service using Bicep and GitHub Actions.

---

## Folder Structure

    ./
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml          # GitHub Actions workflow for CI/CD
    ├── infra/                      # Infrastructure as Code template with paramters (Bicep)
    │   ├── main.bicep
    │   └── parameters.json
    ├── src/                        # Application source code
    │   ├── app.js                  # Node.js backend with Express
    │   ├── package.json
    │   └── public/                 # Static frontend
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    └── README.md                   # Project documentation


---

## Infrastructure (Bicep)

The Bicep template (`infra/main.bicep`) provisions:

- **App Service Plan:** Linux, S1 SKU  
- **Web App:** Linux container running Node.js 20 LTS  
- Configured to use HTTPS only

This defines all required cloud infrastructure declaratively and enables easy, repeatable deployments.

---

## GitHub Actions Pipeline

Workflow file `.github/workflows/deploy.yml` automates:

1. **Build & Package:**  
   - Checks out source code  
   - Sets up Node.js environment  
   - Installs dependencies (`npm install`)  
   - Zips the app folder (including `node_modules`)  
   - Uploads the zipped artifact  

2. **Deploy Infrastructure:**  
   - Logs into Azure via service principal  
   - Deploys or updates infrastructure using Bicep  

3. **Deploy Application:**  
   - Downloads zipped app artifact  
   - Logs into Azure  
   - Deploys app to Azure Web App  

The workflow triggers automatically on every push to the `main` branch.

---

## Configuration & Setup

### Required Secrets in GitHub Repository Settings

- `AZURE_CREDENTIALS`: Azure service principal JSON credentials  
- `AZURE_SUBSCRIPTION_ID`: Azure subscription ID  
- `RESOURCE_GROUP`: Name of your Azure resource group  

### Bicep Parameters

Update `infra/parameters.json` with your desired resource names and parameters to match your environment.

---

Feel free to contribute or adapt this as a foundation for your own Azure CI/CD workflows!
