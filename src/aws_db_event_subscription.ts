import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbEventSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDbEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  sns_topic: string;
  source_ids?: string[];
  source_type?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDbEventSubscriptionArgsTimeouts;
}

export class aws_db_event_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDbEventSubscriptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_event_subscription", resourceName);
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

  get sns_topic(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
