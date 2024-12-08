import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPrometheusWorkspacesArgs {
  alias_prefix?: string;
}

export class data_aws_prometheus_workspaces extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsPrometheusWorkspacesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_prometheus_workspaces", resourceName);
  }

  get aliases(): string {
    return `data.${this.resourceType}.${this.resourceName}.aliases`;
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get workspace_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_ids`;
  }
}
