import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchemasRegistryPolicyArgs {
  policy: string;
  registry_name: string;
}

export class aws_schemas_registry_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSchemasRegistryPolicyArgs) {
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
