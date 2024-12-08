import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotIndexingConfigurationArgsThingGroupIndexingConfigurationCustomField {
  name?: string;
  type?: string;
}

export interface AwsIotIndexingConfigurationArgsThingGroupIndexingConfigurationManagedField {
  name?: string;
  type?: string;
}

export interface AwsIotIndexingConfigurationArgsThingGroupIndexingConfiguration {
  thing_group_indexing_mode: string;
  custom_field?: AwsIotIndexingConfigurationArgsThingGroupIndexingConfigurationCustomField[];
  managed_field?: AwsIotIndexingConfigurationArgsThingGroupIndexingConfigurationManagedField[];
}

export interface AwsIotIndexingConfigurationArgsThingIndexingConfigurationCustomField {
  name?: string;
  type?: string;
}

export interface AwsIotIndexingConfigurationArgsThingIndexingConfigurationFilter {
  named_shadow_names?: string[];
}

export interface AwsIotIndexingConfigurationArgsThingIndexingConfigurationManagedField {
  name?: string;
  type?: string;
}

export interface AwsIotIndexingConfigurationArgsThingIndexingConfiguration {
  device_defender_indexing_mode?: string;
  named_shadow_indexing_mode?: string;
  thing_connectivity_indexing_mode?: string;
  thing_indexing_mode: string;
  custom_field?: AwsIotIndexingConfigurationArgsThingIndexingConfigurationCustomField[];
  filter?: AwsIotIndexingConfigurationArgsThingIndexingConfigurationFilter;
  managed_field?: AwsIotIndexingConfigurationArgsThingIndexingConfigurationManagedField[];
}

export interface AwsIotIndexingConfigurationArgs {
  thing_group_indexing_configuration?: AwsIotIndexingConfigurationArgsThingGroupIndexingConfiguration;
  thing_indexing_configuration?: AwsIotIndexingConfigurationArgsThingIndexingConfiguration;
}

export class aws_iot_indexing_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotIndexingConfigurationArgs) {
    const meta = {thing_group_indexing_configuration:{isBlock:true,custom_field:{isBlock:true},managed_field:{isBlock:true}},thing_indexing_configuration:{isBlock:true,custom_field:{isBlock:true},filter:{isBlock:true},managed_field:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_iot_indexing_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
