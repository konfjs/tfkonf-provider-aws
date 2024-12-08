import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDevopsguruNotificationChannelArgsFilters {
}

export interface DataAwsDevopsguruNotificationChannelArgsSns {
}

export interface DataAwsDevopsguruNotificationChannelArgs {
  id: string;
  filters?: DataAwsDevopsguruNotificationChannelArgsFilters[];
  sns?: DataAwsDevopsguruNotificationChannelArgsSns[];
}

export class data_aws_devopsguru_notification_channel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDevopsguruNotificationChannelArgs) {
    const meta = {filters:{isBlock:true},sns:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_devopsguru_notification_channel", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
