import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftEndpointAuthorizationArgs {
  account: string;
  cluster_identifier: string;
  force_delete?: boolean;
  vpc_ids?: string[];
}

export class aws_redshift_endpoint_authorization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftEndpointAuthorizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_endpoint_authorization", resourceName);
  }

  get account(): string {
    return `${this.resourceType}.${this.resourceName}.account`;
  }

  get allowed_all_vpcs(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_all_vpcs`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get endpoint_count(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_count`;
  }

  get grantee(): string {
    return `${this.resourceType}.${this.resourceName}.grantee`;
  }

  get grantor(): string {
    return `${this.resourceType}.${this.resourceName}.grantor`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
