import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleDestination {
  region: string;
  registry_id: string;
}

export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleRepositoryFilter {
  filter: string;
  filter_type: string;
}

export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRule {
  destination: AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleDestination[];
  repository_filter?: AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleRepositoryFilter[];
}

export interface AwsEcrReplicationConfigurationArgsReplicationConfiguration {
  rule: AwsEcrReplicationConfigurationArgsReplicationConfigurationRule[];
}

export interface AwsEcrReplicationConfigurationArgs {
  replication_configuration?: AwsEcrReplicationConfigurationArgsReplicationConfiguration;
}

export class aws_ecr_replication_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEcrReplicationConfigurationArgs) {
    const meta = {replication_configuration:{isBlock:true,rule:{isBlock:true,destination:{isBlock:true},repository_filter:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_ecr_replication_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }
}
