import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityPoolRolesAttachmentArgsRoleMappingMappingRule {
  claim: string;
  match_type: string;
  role_arn: string;
  value: string;
}

export interface AwsCognitoIdentityPoolRolesAttachmentArgsRoleMapping {
  ambiguous_role_resolution?: string;
  identity_provider: string;
  type: string;
  mapping_rule?: AwsCognitoIdentityPoolRolesAttachmentArgsRoleMappingMappingRule[];
}

export interface AwsCognitoIdentityPoolRolesAttachmentArgs {
  identity_pool_id: string;
  roles: { [key: string]: string };
  role_mapping?: AwsCognitoIdentityPoolRolesAttachmentArgsRoleMapping[];
}

export class aws_cognito_identity_pool_roles_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoIdentityPoolRolesAttachmentArgs) {
    const meta = {role_mapping:{isBlock:true,mapping_rule:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_identity_pool_roles_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.identity_pool_id`;
  }

  get roles(): string {
    return `${this.resourceType}.${this.resourceName}.roles`;
  }
}
