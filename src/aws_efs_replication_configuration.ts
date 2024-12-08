import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsReplicationConfigurationArgsDestination {
  availability_zone_name?: string;
  kms_key_id?: string;
}

export interface AwsEfsReplicationConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEfsReplicationConfigurationArgs {
  source_file_system_id: string;
  destination: AwsEfsReplicationConfigurationArgsDestination;
  timeouts?: AwsEfsReplicationConfigurationArgsTimeouts;
}

export class aws_efs_replication_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEfsReplicationConfigurationArgs) {
    const meta = {destination:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_efs_replication_configuration", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get original_source_file_system_arn(): string {
    return `${this.resourceType}.${this.resourceName}.original_source_file_system_arn`;
  }

  get source_file_system_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_file_system_arn`;
  }

  get source_file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_file_system_id`;
  }

  get source_file_system_region(): string {
    return `${this.resourceType}.${this.resourceName}.source_file_system_region`;
  }
}
