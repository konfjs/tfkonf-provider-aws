import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesReceiptRuleArgsAddHeaderAction {
  header_name: string;
  header_value: string;
  position: number;
}

export interface AwsSesReceiptRuleArgsBounceAction {
  message: string;
  position: number;
  sender: string;
  smtp_reply_code: string;
  status_code?: string;
  topic_arn?: string;
}

export interface AwsSesReceiptRuleArgsLambdaAction {
  function_arn: string;
  invocation_type?: string;
  position: number;
  topic_arn?: string;
}

export interface AwsSesReceiptRuleArgsS3Action {
  bucket_name: string;
  iam_role_arn?: string;
  kms_key_arn?: string;
  object_key_prefix?: string;
  position: number;
  topic_arn?: string;
}

export interface AwsSesReceiptRuleArgsSnsAction {
  encoding?: string;
  position: number;
  topic_arn: string;
}

export interface AwsSesReceiptRuleArgsStopAction {
  position: number;
  scope: string;
  topic_arn?: string;
}

export interface AwsSesReceiptRuleArgsWorkmailAction {
  organization_arn: string;
  position: number;
  topic_arn?: string;
}

export interface AwsSesReceiptRuleArgs {
  after?: string;
  enabled?: boolean;
  name: string;
  recipients?: string[];
  rule_set_name: string;
  scan_enabled?: boolean;
  add_header_action?: AwsSesReceiptRuleArgsAddHeaderAction[];
  bounce_action?: AwsSesReceiptRuleArgsBounceAction[];
  lambda_action?: AwsSesReceiptRuleArgsLambdaAction[];
  s3_action?: AwsSesReceiptRuleArgsS3Action[];
  sns_action?: AwsSesReceiptRuleArgsSnsAction[];
  stop_action?: AwsSesReceiptRuleArgsStopAction[];
  workmail_action?: AwsSesReceiptRuleArgsWorkmailAction[];
}

export class aws_ses_receipt_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesReceiptRuleArgs) {
    const meta = {add_header_action:{isBlock:true},bounce_action:{isBlock:true},lambda_action:{isBlock:true},s3_action:{isBlock:true},sns_action:{isBlock:true},stop_action:{isBlock:true},workmail_action:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ses_receipt_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rule_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.rule_set_name`;
  }

  get tls_policy(): string {
    return `${this.resourceType}.${this.resourceName}.tls_policy`;
  }
}
