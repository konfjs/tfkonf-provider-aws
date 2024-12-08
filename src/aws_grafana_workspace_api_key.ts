import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceApiKeyArgs {
  key_name: string;
  key_role: string;
  seconds_to_live: number;
  workspace_id: string;
}

export class aws_grafana_workspace_api_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGrafanaWorkspaceApiKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_grafana_workspace_api_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get key_name(): string {
    return `${this.resourceType}.${this.resourceName}.key_name`;
  }

  get key_role(): string {
    return `${this.resourceType}.${this.resourceName}.key_role`;
  }

  get seconds_to_live(): string {
    return `${this.resourceType}.${this.resourceName}.seconds_to_live`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
