# Panda Sky Mixin: SES Lambda permission policy
# This mixin grants the API Lambdas access to SES resources to send emails to people using your platform.
# That IAM Role permission is rolled into your CloudFormation stack after being generated here.

Policy = (config, global, SDK) ->
  # TODO: Look into locking this down. We'd like to allow the Lambdas to target individual phone numbers for now, and worry about topic subscrption in a later version.

  [
    Effect: "Allow"
    Action: [
      "ses:SendEmail"
    ]
    Resource: ["*"]
  ]

export default Policy
