import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTimestreaminfluxdbDbInstanceArgsLogDeliveryConfigurationS3Configuration {
  bucket_name: string;
  enabled: boolean;
}

export interface AwsTimestreaminfluxdbDbInstanceArgsLogDeliveryConfiguration {
  s3_configuration?: AwsTimestreaminfluxdbDbInstanceArgsLogDeliveryConfigurationS3Configuration[];
}

export interface AwsTimestreaminfluxdbDbInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsTimestreaminfluxdbDbInstanceArgs {
  allocated_storage: number;
  bucket: string;
  db_instance_type: string;
  db_parameter_group_identifier?: string;
  name: string;
  organization: string;
  password: string;
  tags?: { [key: string]: string };
  username: string;
  vpc_security_group_ids: string[];
  vpc_subnet_ids: string[];
  log_delivery_configuration?: AwsTimestreaminfluxdbDbInstanceArgsLogDeliveryConfiguration[];
  timeouts?: AwsTimestreaminfluxdbDbInstanceArgsTimeouts;
}

export class aws_timestreaminfluxdb_db_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTimestreaminfluxdbDbInstanceArgs) {
    const meta = {log_delivery_configuration:{isBlock:true,s3_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_timestreaminfluxdb_db_instance", resourceName);
  }

  get allocated_storage(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get db_instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.db_instance_type`;
  }

  get db_storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.db_storage_type`;
  }

  get deployment_type(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_type`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get influx_auth_parameters_secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.influx_auth_parameters_secret_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get publicly_accessible(): string {
    return `${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get secondary_availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_availability_zone`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }

  get vpc_subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_subnet_ids`;
  }
}
