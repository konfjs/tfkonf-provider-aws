import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessSecurityPolicyArgs {
  description?: string;
  name: string;
  policy: string;
  type: string;
}

export class aws_opensearchserverless_security_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessSecurityPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_opensearchserverless_security_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get policy_version(): string {
    return `${this.resourceType}.${this.resourceName}.policy_version`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
