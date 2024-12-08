import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftEndpointAccessArgs {
  cluster_identifier: string;
  endpoint_name: string;
  subnet_group_name: string;
}

export class aws_redshift_endpoint_access extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftEndpointAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_endpoint_access", resourceName);
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get endpoint_name(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get resource_owner(): string {
    return `${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_group_name`;
  }

  get vpc_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
