import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2CoipPoolArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2CoipPoolArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2CoipPoolArgs {
  filter?: DataAwsEc2CoipPoolArgsFilter[];
  timeouts?: DataAwsEc2CoipPoolArgsTimeouts;
}

export class data_aws_ec2_coip_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2CoipPoolArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_coip_pool", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get local_gateway_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_route_table_id`;
  }

  get pool_cidrs(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_cidrs`;
  }

  get pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
