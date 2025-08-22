# AWS Amplify Deployment Guide

## Overview
This project is configured to deploy to AWS Amplify using GitHub Actions. The app will be named `sentinel-web` and deployed to the `us-east-2` region.

## GitHub Secrets Required

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

### Required Secrets:
- `AWS_ACCESS_KEY_ID`: Sentinel's AWS access key
- `AWS_SECRET_ACCESS_KEY`: Sentinel's AWS secret key

### Optional Secrets (for advanced setup):
- `AMPLIFY_APP_ID`: The Amplify app ID (will be created automatically if not provided)
- `AWS_ROLE_TO_ASSUME`: IAM role ARN for cross-account access

## Deployment Workflows

### 1. AWS Amplify CLI Workflow (Recommended)
- **File**: `.github/workflows/deploy-amplify-cli.yml`
- **Trigger**: Push to `main` or `master` branch
- **Process**: Uses Amplify CLI for deployment

### 2. AWS CLI Direct Workflow
- **File**: `.github/workflows/deploy-amplify.yml`
- **Trigger**: Push to `main` or `master` branch
- **Process**: Uses AWS CLI directly for deployment

## Local Development

### Using Sentinel AWS Profile:
```bash
# Set Sentinel profile for AWS operations
export AWS_PROFILE=sentinel

# Check AWS configuration
aws configure list --profile sentinel

# Test AWS access
aws sts get-caller-identity --profile sentinel
```

### Manual Amplify Deployment:
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize (first time only)
amplify init --appName sentinel-web --envName prod

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## AWS Resources Created

The deployment will create:
- **Amplify App**: `sentinel-web`
- **Hosting Environment**: Production environment
- **S3 Bucket**: For static assets
- **CloudFront Distribution**: For global CDN
- **IAM Roles**: For deployment permissions

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check the build logs in GitHub Actions
2. **Permission Errors**: Verify AWS credentials and IAM permissions
3. **Region Mismatch**: Ensure all resources are in `us-east-2`

### Manual Deployment:
If GitHub Actions fails, you can manually deploy:
```bash
export AWS_PROFILE=sentinel
aws amplify start-job --app-id YOUR_APP_ID --branch-name main --job-type RELEASE
```

## Cost Considerations

- **Amplify**: Pay per build minute and data transfer
- **S3**: Storage and request costs
- **CloudFront**: Data transfer and request costs
- **Free Tier**: Available for new accounts

## Security Notes

- AWS credentials are stored as GitHub secrets
- IAM roles should follow least privilege principle
- Consider using OIDC for more secure authentication
