# App Deployement Guide

This application can be deployed to any hosting provider using native hosting features like static file execution or through contanerization process in azure, aws or vps.

## Configurations

**Azure**
To use azure on the github pipeline we need to generate credentails first

```shell
  az ad sp create-for-rbac \
    --name {appName} --role contributor \
    --scopes \
    /subscriptions/{subId}/resourceGroups/{gID} \
     --sdk-auth
```

Then use this workflow in the repository

```yaml

name: Build and Push Docker Image
on:
  push:
    branches:
      - main

jobs:
  build-image:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GIT_TOKEN }} # replace this with a PAT

    - name: Build and Push Docker Image
      run: |
        docker build -t ghcr.io/${{ github.repository_owner }}/{name}:latest .
        docker push ghcr.io/${{ github.repository_owner }}/{name}:latest
  deploy:
    runs-on: ubuntu-latest
    needs: build-image
    steps:
          - name: Checkout code
            uses: actions/checkout@v2
          - name: Login to azure
            uses: azure/login@v1
            with:
              creds: ${{ secrets.AZURE_CREDENTIALS }}
          - name: Deploy to Azure Web App
            uses: azure/webapps-deploy@v2
            with:
              app-name: '{app-name}'
              images: 'ghcr.io/${{ github.repository_owner }}/{name}:latest'
      
```

After this configuration is complete  then oush the coe to deploy a new version.
