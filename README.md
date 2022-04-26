## Steps
1. Clone the repo
2. Run `npm install`
3. Run `npm run build` to build the SST app. The build should succeed.
6. Open the template JSON file in `.build/cdk.out`, you should see auto pause enabled in the CloudFormation template, ie.
```yml
"ScalingConfiguration": {
  "AutoPause": true,
  "MaxCapacity": 16,
  "MinCapacity": 2,
  "SecondsUntilAutoPause": 300
},
```
