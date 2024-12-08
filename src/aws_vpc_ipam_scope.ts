import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamScopeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcIpamScopeArgs {
  description?: string;
  ipam_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsVpcIpamScopeArgsTimeouts;
}

export class aws_vpc_ipam_scope extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcIpamScopeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_scope", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_arn`;
  }

  get ipam_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_id`;
  }

  get ipam_scope_type(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_scope_type`;
  }

  get is_default(): string {
    return `${this.resourceType}.${this.resourceName}.is_default`;
  }

  get pool_count(): string {
    return `${this.resourceType}.${this.resourceName}.pool_count`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
