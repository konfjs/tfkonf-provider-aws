import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDmsEndpointArgs {
  endpoint_id: string;
}

export class data_aws_dms_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDmsEndpointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dms_endpoint", resourceName);
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get database_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_name`;
  }

  get elasticsearch_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.elasticsearch_settings`;
  }

  get endpoint_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_arn`;
  }

  get endpoint_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_id`;
  }

  get endpoint_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get engine_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_name`;
  }

  get extra_connection_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.extra_connection_attributes`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kafka_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.kafka_settings`;
  }

  get kinesis_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.kinesis_settings`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get mongodb_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.mongodb_settings`;
  }

  get password(): string {
    return `data.${this.resourceType}.${this.resourceName}.password`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get postgres_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.postgres_settings`;
  }

  get redis_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.redis_settings`;
  }

  get redshift_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.redshift_settings`;
  }

  get s3_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_settings`;
  }

  get secrets_manager_access_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.secrets_manager_access_role_arn`;
  }

  get secrets_manager_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.secrets_manager_arn`;
  }

  get server_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_name`;
  }

  get service_access_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_access_role`;
  }

  get ssl_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.ssl_mode`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get username(): string {
    return `data.${this.resourceType}.${this.resourceName}.username`;
  }
}
