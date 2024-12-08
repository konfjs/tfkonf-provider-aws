import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchemasRegistryPolicyArgs {
  policy: string;
  registry_name: string;
}

export class aws_schemas_registry_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSchemasRegistryPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_schemas_registry_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get registry_name(): string {
    return `${this.resourceType}.${this.resourceName}.registry_name`;
  }
}
