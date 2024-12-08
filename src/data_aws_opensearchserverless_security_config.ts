import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOpensearchserverlessSecurityConfigArgsSamlOptions {
}

export interface DataAwsOpensearchserverlessSecurityConfigArgs {
  id: string;
  saml_options?: DataAwsOpensearchserverlessSecurityConfigArgsSamlOptions;
}

export class data_aws_opensearchserverless_security_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOpensearchserverlessSecurityConfigArgs) {
    const meta = {saml_options:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_opensearchserverless_security_config", resourceName);
  }

  get config_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.config_version`;
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

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
