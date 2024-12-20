import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDocdbEventSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDocdbEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  sns_topic_arn: string;
  source_ids?: string[];
  source_type?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDocdbEventSubscriptionArgsTimeouts;
}

export class aws_docdb_event_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDocdbEventSubscriptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_docdb_event_subscription", resourceName);
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

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get sns_topic_arn(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
