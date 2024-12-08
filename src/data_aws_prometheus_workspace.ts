import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPrometheusWorkspaceArgs {
  workspace_id: string;
}

export class data_aws_prometheus_workspace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsPrometheusWorkspaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_prometheus_workspace", resourceName);
  }

  get alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.alias`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get prometheus_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.prometheus_endpoint`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get workspace_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
