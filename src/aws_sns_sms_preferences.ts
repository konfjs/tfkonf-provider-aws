import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsSmsPreferencesArgs {
  default_sender_id?: string;
  default_sms_type?: string;
  delivery_status_iam_role_arn?: string;
  delivery_status_success_sampling_rate?: string;
  usage_report_s3_bucket?: string;
}

export class aws_sns_sms_preferences extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSnsSmsPreferencesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_sms_preferences", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get monthly_spend_limit(): string {
    return `${this.resourceType}.${this.resourceName}.monthly_spend_limit`;
  }
}
