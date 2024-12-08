import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessSecurityConfigArgsSamlOptions {
  group_attribute?: string;
  metadata: string;
  user_attribute?: string;
}

export interface AwsOpensearchserverlessSecurityConfigArgs {
  description?: string;
  name: string;
  type: string;
  saml_options?: AwsOpensearchserverlessSecurityConfigArgsSamlOptions;
}

export class aws_opensearchserverless_security_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchserverlessSecurityConfigArgs) {
    const meta = {saml_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearchserverless_security_config", resourceName);
  }

  get config_version(): string {
    return `${this.resourceType}.${this.resourceName}.config_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
