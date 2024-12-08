import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftEventSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRedshiftEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  name: string;
  severity?: string;
  sns_topic_arn: string;
  source_ids?: string[];
  source_type?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRedshiftEventSubscriptionArgsTimeouts;
}

export class aws_redshift_event_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftEventSubscriptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_redshift_event_subscription", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get customer_aws_id(): string {
    return `${this.resourceType}.${this.resourceName}.customer_aws_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get sns_topic_arn(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
