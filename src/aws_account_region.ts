import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAccountRegionArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsAccountRegionArgs {
  account_id?: string;
  enabled: boolean;
  region_name: string;
  timeouts?: AwsAccountRegionArgsTimeouts;
}

export class aws_account_region extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAccountRegionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_account_region", resourceName);
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get opt_status(): string {
    return `${this.resourceType}.${this.resourceName}.opt_status`;
  }

  get region_name(): string {
    return `${this.resourceType}.${this.resourceName}.region_name`;
  }
}
