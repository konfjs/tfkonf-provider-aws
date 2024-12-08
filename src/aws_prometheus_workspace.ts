import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPrometheusWorkspaceArgsLoggingConfiguration {
  log_group_arn: string;
}

export interface AwsPrometheusWorkspaceArgs {
  alias?: string;
  kms_key_arn?: string;
  tags?: { [key: string]: string };
  logging_configuration?: AwsPrometheusWorkspaceArgsLoggingConfiguration;
}

export class aws_prometheus_workspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPrometheusWorkspaceArgs) {
    const meta = {logging_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_prometheus_workspace", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get prometheus_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.prometheus_endpoint`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
