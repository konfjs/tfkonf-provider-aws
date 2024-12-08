import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2DedicatedIpPoolArgs {
  pool_name: string;
  tags?: { [key: string]: string };
}

export class aws_sesv2_dedicated_ip_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2DedicatedIpPoolArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_dedicated_ip_pool", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pool_name(): string {
    return `${this.resourceType}.${this.resourceName}.pool_name`;
  }

  get scaling_mode(): string {
    return `${this.resourceType}.${this.resourceName}.scaling_mode`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
