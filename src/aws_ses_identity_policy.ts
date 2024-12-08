import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesIdentityPolicyArgs {
  identity: string;
  name: string;
  policy: string;
}

export class aws_ses_identity_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesIdentityPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_identity_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity(): string {
    return `${this.resourceType}.${this.resourceName}.identity`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
