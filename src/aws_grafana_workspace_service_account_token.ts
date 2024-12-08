import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceServiceAccountTokenArgs {
  name: string;
  seconds_to_live: number;
  service_account_id: string;
  workspace_id: string;
}

export class aws_grafana_workspace_service_account_token extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceServiceAccountTokenArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_grafana_workspace_service_account_token", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get expires_at(): string {
    return `${this.resourceType}.${this.resourceName}.expires_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get seconds_to_live(): string {
    return `${this.resourceType}.${this.resourceName}.seconds_to_live`;
  }

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }

  get service_account_token_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_token_id`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
