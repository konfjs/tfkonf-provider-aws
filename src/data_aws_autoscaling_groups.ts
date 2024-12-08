import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAutoscalingGroupsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsAutoscalingGroupsArgs {
  filter?: DataAwsAutoscalingGroupsArgsFilter[];
}

export class data_aws_autoscaling_groups extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAutoscalingGroupsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_autoscaling_groups", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
