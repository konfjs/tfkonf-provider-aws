import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityPolicyArgs {
  email_identity: string;
  policy: string;
  policy_name: string;
}

export class aws_sesv2_email_identity_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2EmailIdentityPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_email_identity_policy", resourceName);
  }

  get email_identity(): string {
    return `${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.policy_name`;
  }
}
