import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueDevEndpointArgs {
  arguments?: { [key: string]: string };
  extra_jars_s3_path?: string;
  extra_python_libs_s3_path?: string;
  glue_version?: string;
  name: string;
  number_of_nodes?: number;
  number_of_workers?: number;
  public_key?: string;
  public_keys?: string[];
  role_arn: string;
  security_configuration?: string;
  security_group_ids?: string[];
  subnet_id?: string;
  tags?: { [key: string]: string };
  worker_type?: string;
}

export class aws_glue_dev_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueDevEndpointArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glue_dev_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get failure_reason(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_address(): string {
    return `${this.resourceType}.${this.resourceName}.private_address`;
  }

  get public_address(): string {
    return `${this.resourceType}.${this.resourceName}.public_address`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get yarn_endpoint_address(): string {
    return `${this.resourceType}.${this.resourceName}.yarn_endpoint_address`;
  }

  get zeppelin_remote_spark_interpreter_port(): string {
    return `${this.resourceType}.${this.resourceName}.zeppelin_remote_spark_interpreter_port`;
  }
}
