#!/usr/bin/env bash

npm run build
aws s3 sync ./dist s3://liam-reilly.info
#aws cloudfront create-invalidation --distribution-id E217GY0T80SPQ5