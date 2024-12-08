import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOpensearchserverlessSecurityPolicyArgs {
  name: string;
  type: string;
}

export class data_aws_opensearchserverless_security_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOpensearchserverlessSecurityPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_opensearchserverless_security_policy", resourceName);
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get policy_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_version`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
