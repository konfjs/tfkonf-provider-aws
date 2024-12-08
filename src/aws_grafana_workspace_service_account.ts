import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceServiceAccountArgs {
  grafana_role: string;
  name: string;
  workspace_id: string;
}

export class aws_grafana_workspace_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGrafanaWorkspaceServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_grafana_workspace_service_account", resourceName);
  }

  get grafana_role(): string {
    return `${this.resourceType}.${this.resourceName}.grafana_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
