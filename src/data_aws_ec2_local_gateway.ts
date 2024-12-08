import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayArgs {
  filter?: DataAwsEc2LocalGatewayArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayArgsTimeouts;
}

export class data_aws_ec2_local_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2LocalGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
