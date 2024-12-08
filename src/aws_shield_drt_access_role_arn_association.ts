import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldDrtAccessRoleArnAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsShieldDrtAccessRoleArnAssociationArgs {
  role_arn: string;
  timeouts?: AwsShieldDrtAccessRoleArnAssociationArgsTimeouts;
}

export class aws_shield_drt_access_role_arn_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldDrtAccessRoleArnAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_shield_drt_access_role_arn_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
