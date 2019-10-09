# alexa-sls-bus

Enjoy alexa is a serverless stack that represents the services for alexa.

## Requirements

* Configure your **aws credentials** at `~/.aws/credentials`
*note: Attention to set your personal developer aws account to dev-aws profile in this configuration file*
* Create your Route53 subdomain record in the main AWS Account;
* Install NodeJS v10 or later;
* Install Serverless framework; [https://serverless.com/](https://serverless.com/)

## Getting Started

### Set enviroments

Set this enviroments to run this stack in your AWS account correctly:

```bash
export AWS_ACCOUNT=account_number_here
export SERVERLESS_SUBDOMAIN=domain_here
```

### Install via npm
```bash
npm i
```

### Create S3 Deployment Bucket

1. Access your AWS account and s3 section;
1. Create a new Bucket with this pattern:
    * *servicename*-*AWS_ACCOUNT*-*stage*-*region*-deploys.
    Example: `alexa-sls-bus-214468698722-dev-us-east-1-deploys`
*note: create your Bucket in **us-east-1** region*
    
### Deploy dev account
```bash
npm run deploy:dev
```

## Frameworks, plugins and libs reference

* [Serverless Framework](https://serverless.com/);
* [Serverless Domain Manager](https://github.com/amplify-education/serverless-domain-manager);
* [Serverless Layers Plugin](https://github.com/agutoli/serverless-layers);
* [Serverless Wrap Log](https://github.com/cubonetwork/serverless-wrap-log);
* [Amazon DynamoDB DataMapper For JavaScript](https://awslabs.github.io/dynamodb-data-mapper-js/);
* [Amazon DynamoDB DataMapper Annotations](https://awslabs.github.io/dynamodb-data-mapper-js/packages/dynamodb-data-mapper-annotations/);


