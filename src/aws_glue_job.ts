import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueJobArgsCommand {
  name?: string;
  script_location: string;
}

export interface AwsGlueJobArgsExecutionProperty {
  max_concurrent_runs?: number;
}

export interface AwsGlueJobArgsNotificationProperty {
  notify_delay_after?: number;
}

export interface AwsGlueJobArgs {
  connections?: string[];
  default_arguments?: { [key: string]: string };
  description?: string;
  execution_class?: string;
  job_run_queuing_enabled?: boolean;
  maintenance_window?: string;
  max_retries?: number;
  name: string;
  non_overridable_arguments?: { [key: string]: string };
  role_arn: string;
  security_configuration?: string;
  tags?: { [key: string]: string };
  command: AwsGlueJobArgsCommand;
  execution_property?: AwsGlueJobArgsExecutionProperty;
  notification_property?: AwsGlueJobArgsNotificationProperty;
}

export class aws_glue_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueJobArgs) {
    const meta = {command:{isBlock:true},execution_property:{isBlock:true},notification_property:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_job", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get glue_version(): string {
    return `${this.resourceType}.${this.resourceName}.glue_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.max_capacity`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get number_of_workers(): string {
    return `${this.resourceType}.${this.resourceName}.number_of_workers`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get timeout(): string {
    return `${this.resourceType}.${this.resourceName}.timeout`;
  }

  get worker_type(): string {
    return `${this.resourceType}.${this.resourceName}.worker_type`;
  }
}
