import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevopsguruNotificationChannelArgsFilters {
  message_types?: string[];
  severities?: string[];
}

export interface AwsDevopsguruNotificationChannelArgsSns {
  topic_arn: string;
}

export interface AwsDevopsguruNotificationChannelArgs {
  filters?: AwsDevopsguruNotificationChannelArgsFilters[];
  sns?: AwsDevopsguruNotificationChannelArgsSns[];
}

export class aws_devopsguru_notification_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevopsguruNotificationChannelArgs) {
    const meta = {filters:{isBlock:true},sns:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_devopsguru_notification_channel", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
