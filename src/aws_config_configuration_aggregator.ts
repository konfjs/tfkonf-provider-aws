import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigConfigurationAggregatorArgsAccountAggregationSource {
  account_ids: string[];
  all_regions?: boolean;
  regions?: string[];
}

export interface AwsConfigConfigurationAggregatorArgsOrganizationAggregationSource {
  all_regions?: boolean;
  regions?: string[];
  role_arn: string;
}

export interface AwsConfigConfigurationAggregatorArgs {
  name: string;
  tags?: { [key: string]: string };
  account_aggregation_source?: AwsConfigConfigurationAggregatorArgsAccountAggregationSource;
  organization_aggregation_source?: AwsConfigConfigurationAggregatorArgsOrganizationAggregationSource;
}

export class aws_config_configuration_aggregator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigConfigurationAggregatorArgs) {
    const meta = {account_aggregation_source:{isBlock:true},organization_aggregation_source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_configuration_aggregator", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
