import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsEventSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDmsEventSubscriptionArgs {
  enabled?: boolean;
  event_categories: string[];
  name: string;
  sns_topic_arn: string;
  source_ids?: string[];
  source_type: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDmsEventSubscriptionArgsTimeouts;
}

export class aws_dms_event_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDmsEventSubscriptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dms_event_subscription", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get event_categories(): string {
    return `${this.resourceType}.${this.resourceName}.event_categories`;
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

  get source_type(): string {
    return `${this.resourceType}.${this.resourceName}.source_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
