import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecuritylakeCustomLogSourceArgsConfigurationCrawlerConfiguration {
  role_arn: string;
}

export interface AwsSecuritylakeCustomLogSourceArgsConfigurationProviderIdentity {
  external_id: string;
  principal: string;
}

export interface AwsSecuritylakeCustomLogSourceArgsConfiguration {
  crawler_configuration?: AwsSecuritylakeCustomLogSourceArgsConfigurationCrawlerConfiguration[];
  provider_identity?: AwsSecuritylakeCustomLogSourceArgsConfigurationProviderIdentity[];
}

export interface AwsSecuritylakeCustomLogSourceArgs {
  event_classes?: string[];
  source_name: string;
  configuration?: AwsSecuritylakeCustomLogSourceArgsConfiguration[];
}

export class aws_securitylake_custom_log_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecuritylakeCustomLogSourceArgs) {
    const meta = {configuration:{isBlock:true,crawler_configuration:{isBlock:true},provider_identity:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_securitylake_custom_log_source", resourceName);
  }

  get attributes(): string {
    return `${this.resourceType}.${this.resourceName}.attributes`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get provider_details(): string {
    return `${this.resourceType}.${this.resourceName}.provider_details`;
  }

  get source_name(): string {
    return `${this.resourceType}.${this.resourceName}.source_name`;
  }

  get source_version(): string {
    return `${this.resourceType}.${this.resourceName}.source_version`;
  }
}
