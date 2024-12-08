import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightAccountSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsQuicksightAccountSubscriptionArgs {
  account_name: string;
  active_directory_name?: string;
  admin_group?: string[];
  authentication_method: string;
  author_group?: string[];
  contact_number?: string;
  directory_id?: string;
  edition: string;
  email_address?: string;
  first_name?: string;
  iam_identity_center_instance_arn?: string;
  last_name?: string;
  notification_email: string;
  reader_group?: string[];
  realm?: string;
  timeouts?: AwsQuicksightAccountSubscriptionArgsTimeouts;
}

export class aws_quicksight_account_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightAccountSubscriptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_account_subscription", resourceName);
  }

  get account_name(): string {
    return `${this.resourceType}.${this.resourceName}.account_name`;
  }

  get account_subscription_status(): string {
    return `${this.resourceType}.${this.resourceName}.account_subscription_status`;
  }

  get authentication_method(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_method`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get edition(): string {
    return `${this.resourceType}.${this.resourceName}.edition`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get notification_email(): string {
    return `${this.resourceType}.${this.resourceName}.notification_email`;
  }
}
