import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2SpotPriceArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2SpotPriceArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2SpotPriceArgs {
  availability_zone?: string;
  instance_type?: string;
  filter?: DataAwsEc2SpotPriceArgsFilter[];
  timeouts?: DataAwsEc2SpotPriceArgsTimeouts;
}

export class data_aws_ec2_spot_price extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2SpotPriceArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_spot_price", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get spot_price(): string {
    return `data.${this.resourceType}.${this.resourceName}.spot_price`;
  }

  get spot_price_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.spot_price_timestamp`;
  }
}
