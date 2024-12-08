import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2InstanceTypesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2InstanceTypesArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2InstanceTypesArgs {
  filter?: DataAwsEc2InstanceTypesArgsFilter[];
  timeouts?: DataAwsEc2InstanceTypesArgsTimeouts;
}

export class data_aws_ec2_instance_types extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2InstanceTypesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_instance_types", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_types`;
  }
}
