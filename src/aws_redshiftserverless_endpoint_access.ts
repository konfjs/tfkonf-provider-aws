import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessEndpointAccessArgs {
  endpoint_name: string;
  owner_account?: string;
  subnet_ids: string[];
  workgroup_name: string;
}

export class aws_redshiftserverless_endpoint_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftserverlessEndpointAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_endpoint_access", resourceName);
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get vpc_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }

  get workgroup_name(): string {
    return `${this.resourceType}.${this.resourceName}.workgroup_name`;
  }
}
