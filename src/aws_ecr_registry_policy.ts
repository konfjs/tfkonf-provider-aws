import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRegistryPolicyArgs {
  policy: string;
}

export class aws_ecr_registry_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEcrRegistryPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecr_registry_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }
}
