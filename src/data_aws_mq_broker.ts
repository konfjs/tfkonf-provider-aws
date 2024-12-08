import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMqBrokerArgs {
}

export class data_aws_mq_broker extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMqBrokerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mq_broker", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_strategy(): string {
    return `data.${this.resourceType}.${this.resourceName}.authentication_strategy`;
  }

  get auto_minor_version_upgrade(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_minor_version_upgrade`;
  }

  get broker_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.broker_id`;
  }

  get broker_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.broker_name`;
  }

  get configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration`;
  }

  get deployment_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.deployment_mode`;
  }

  get encryption_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_options`;
  }

  get engine_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_type`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get host_instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_instance_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.instances`;
  }

  get ldap_server_metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.ldap_server_metadata`;
  }

  get logs(): string {
    return `data.${this.resourceType}.${this.resourceName}.logs`;
  }

  get maintenance_window_start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_window_start_time`;
  }

  get publicly_accessible(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user(): string {
    return `data.${this.resourceType}.${this.resourceName}.user`;
  }
}
