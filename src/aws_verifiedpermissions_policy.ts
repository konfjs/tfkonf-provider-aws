import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsPolicyArgsDefinitionStatic {
  description?: string;
  statement: string;
}

export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedPrincipal {
  entity_id: string;
  entity_type: string;
}

export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedResource {
  entity_id: string;
  entity_type: string;
}

export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinked {
  policy_template_id: string;
  principal?: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedPrincipal[];
  resource?: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedResource[];
}

export interface AwsVerifiedpermissionsPolicyArgsDefinition {
  static?: AwsVerifiedpermissionsPolicyArgsDefinitionStatic[];
  template_linked?: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinked[];
}

export interface AwsVerifiedpermissionsPolicyArgs {
  policy_store_id: string;
  definition?: AwsVerifiedpermissionsPolicyArgsDefinition[];
}

export class aws_verifiedpermissions_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyArgs) {
    const meta = {definition:{isBlock:true,static:{isBlock:true},template_linked:{isBlock:true,principal:{isBlock:true},resource:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedpermissions_policy", resourceName);
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get policy_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_store_id`;
  }
}
