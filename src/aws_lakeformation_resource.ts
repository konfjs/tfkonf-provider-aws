import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationResourceArgs {
  arn: string;
  use_service_linked_role?: boolean;
}

export class aws_lakeformation_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLakeformationResourceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lakeformation_resource", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hybrid_access_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.hybrid_access_enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get with_federation(): string {
    return `${this.resourceType}.${this.resourceName}.with_federation`;
  }
}
