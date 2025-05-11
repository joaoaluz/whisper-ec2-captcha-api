#!/bin/bash
docker login -u AWS -p $(aws ecr get-login-password --region us-east-1) AWS_ID.dkr.ecr.us-east-1.amazonaws.com
docker tag whisper-image:latest AWS_ID.dkr.ecr.us-east-1.amazonaws.com/bgc-whisper-test
docker push AWS_ID.dkr.ecr.us-east-1.amazonaws.com/bgc-whisper-test