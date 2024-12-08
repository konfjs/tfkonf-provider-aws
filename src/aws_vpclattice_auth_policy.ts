import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeAuthPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeAuthPolicyArgs {
  policy: string;
  resource_identifier: string;
  state?: string;
  timeouts?: AwsVpclatticeAuthPolicyArgsTimeouts;
}

export class aws_vpclattice_auth_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpclatticeAuthPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_auth_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get resource_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.resource_identifier`;
  }
}
