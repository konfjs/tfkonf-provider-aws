import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRegistryScanningConfigurationArgsRuleRepositoryFilter {
  filter: string;
  filter_type: string;
}

export interface AwsEcrRegistryScanningConfigurationArgsRule {
  scan_frequency: string;
  repository_filter: AwsEcrRegistryScanningConfigurationArgsRuleRepositoryFilter[];
}

export interface AwsEcrRegistryScanningConfigurationArgs {
  scan_type: string;
  rule?: AwsEcrRegistryScanningConfigurationArgsRule[];
}

export class aws_ecr_registry_scanning_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrRegistryScanningConfigurationArgs) {
    const meta = {rule:{isBlock:true,repository_filter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ecr_registry_scanning_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get scan_type(): string {
    return `${this.resourceType}.${this.resourceName}.scan_type`;
  }
}
