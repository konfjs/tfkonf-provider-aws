import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSfnStateMachineArgsEncryptionConfiguration {
  kms_data_key_reuse_period_seconds?: number;
  kms_key_id?: string;
  type?: string;
}

export interface AwsSfnStateMachineArgsLoggingConfiguration {
  include_execution_data?: boolean;
  level?: string;
  log_destination?: string;
}

export interface AwsSfnStateMachineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSfnStateMachineArgsTracingConfiguration {
  enabled?: boolean;
}

export interface AwsSfnStateMachineArgs {
  definition: string;
  publish?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  type?: string;
  encryption_configuration?: AwsSfnStateMachineArgsEncryptionConfiguration;
  logging_configuration?: AwsSfnStateMachineArgsLoggingConfiguration;
  timeouts?: AwsSfnStateMachineArgsTimeouts;
  tracing_configuration?: AwsSfnStateMachineArgsTracingConfiguration;
}

export class aws_sfn_state_machine extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSfnStateMachineArgs) {
    const meta = {encryption_configuration:{isBlock:true},logging_configuration:{isBlock:true},timeouts:{isBlock:true},tracing_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sfn_state_machine", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get definition(): string {
    return `${this.resourceType}.${this.resourceName}.definition`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get state_machine_version_arn(): string {
    return `${this.resourceType}.${this.resourceName}.state_machine_version_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version_description(): string {
    return `${this.resourceType}.${this.resourceName}.version_description`;
  }
}
