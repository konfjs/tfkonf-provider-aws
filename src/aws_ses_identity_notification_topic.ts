import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesIdentityNotificationTopicArgs {
  identity: string;
  include_original_headers?: boolean;
  notification_type: string;
  topic_arn?: string;
}

export class aws_ses_identity_notification_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesIdentityNotificationTopicArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_identity_notification_topic", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity(): string {
    return `${this.resourceType}.${this.resourceName}.identity`;
  }

  get notification_type(): string {
    return `${this.resourceType}.${this.resourceName}.notification_type`;
  }
}
