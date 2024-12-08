import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsPlatformApplicationArgs {
  apple_platform_bundle_id?: string;
  apple_platform_team_id?: string;
  event_delivery_failure_topic_arn?: string;
  event_endpoint_created_topic_arn?: string;
  event_endpoint_deleted_topic_arn?: string;
  event_endpoint_updated_topic_arn?: string;
  failure_feedback_role_arn?: string;
  name: string;
  platform: string;
  platform_credential: string;
  platform_principal?: string;
  success_feedback_role_arn?: string;
  success_feedback_sample_rate?: string;
}

export class aws_sns_platform_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSnsPlatformApplicationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_platform_application", resourceName);
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

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get platform_credential(): string {
    return `${this.resourceType}.${this.resourceName}.platform_credential`;
  }
}
