import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecurityGroupArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSecurityGroupArgsTimeouts {
  read?: string;
}

export interface DataAwsSecurityGroupArgs {
  filter?: DataAwsSecurityGroupArgsFilter[];
  timeouts?: DataAwsSecurityGroupArgsTimeouts;
}

export class data_aws_security_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSecurityGroupArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_security_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
