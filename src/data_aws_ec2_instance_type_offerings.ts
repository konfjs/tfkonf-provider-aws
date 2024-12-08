import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2InstanceTypeOfferingsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2InstanceTypeOfferingsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2InstanceTypeOfferingsArgs {
  location_type?: string;
  filter?: DataAwsEc2InstanceTypeOfferingsArgsFilter[];
  timeouts?: DataAwsEc2InstanceTypeOfferingsArgsTimeouts;
}

export class data_aws_ec2_instance_type_offerings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2InstanceTypeOfferingsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_instance_type_offerings", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_types`;
  }

  get location_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_types`;
  }

  get locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.locations`;
  }
}
