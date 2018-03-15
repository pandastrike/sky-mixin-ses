"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Panda Sky Mixin: SES Lambda permission policy
// This mixin grants the API Lambdas access to SES resources to send emails to people using your platform.
// That IAM Role permission is rolled into your CloudFormation stack after being generated here.
var Policy;

Policy = function (config, global, SDK) {
  return [{
    // TODO: Look into locking this down. We'd like to allow the Lambdas to target individual phone numbers for now, and worry about topic subscrption in a later version.
    Effect: "Allow",
    Action: ["ses:SendEmail"],
    Resource: ["*"]
  }];
};

exports.default = Policy;