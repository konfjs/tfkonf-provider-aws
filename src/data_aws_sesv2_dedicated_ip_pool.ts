import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesv2DedicatedIpPoolArgs {
  pool_name: string;
}

export class data_aws_sesv2_dedicated_ip_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSesv2DedicatedIpPoolArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sesv2_dedicated_ip_pool", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get dedicated_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.dedicated_ips`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get pool_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_name`;
  }

  get scaling_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.scaling_mode`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
