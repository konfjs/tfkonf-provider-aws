import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2InstanceTypeOfferingArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2InstanceTypeOfferingArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2InstanceTypeOfferingArgs {
  location_type?: string;
  preferred_instance_types?: string[];
  filter?: DataAwsEc2InstanceTypeOfferingArgsFilter[];
  timeouts?: DataAwsEc2InstanceTypeOfferingArgsTimeouts;
}

export class data_aws_ec2_instance_type_offering extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2InstanceTypeOfferingArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_instance_type_offering", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }
}
