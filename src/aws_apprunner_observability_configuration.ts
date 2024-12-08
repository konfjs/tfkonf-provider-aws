import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerObservabilityConfigurationArgsTraceConfiguration {
  vendor?: string;
}

export interface AwsApprunnerObservabilityConfigurationArgs {
  observability_configuration_name: string;
  tags?: { [key: string]: string };
  trace_configuration?: AwsApprunnerObservabilityConfigurationArgsTraceConfiguration;
}

export class aws_apprunner_observability_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApprunnerObservabilityConfigurationArgs) {
    const meta = {trace_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_observability_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest(): string {
    return `${this.resourceType}.${this.resourceName}.latest`;
  }

  get observability_configuration_name(): string {
    return `${this.resourceType}.${this.resourceName}.observability_configuration_name`;
  }

  get observability_configuration_revision(): string {
    return `${this.resourceType}.${this.resourceName}.observability_configuration_revision`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
