import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderInfrastructureConfigurationArgs {
  arn: string;
}

export class data_aws_imagebuilder_infrastructure_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderInfrastructureConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_infrastructure_configuration", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get date_updated(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_updated`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_metadata_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_metadata_options`;
  }

  get instance_profile_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_profile_name`;
  }

  get instance_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_types`;
  }

  get key_pair(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_pair`;
  }

  get logging(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_tags`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get sns_topic_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.sns_topic_arn`;
  }

  get subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get terminate_instance_on_failure(): string {
    return `data.${this.resourceType}.${this.resourceName}.terminate_instance_on_failure`;
  }
}
