import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaRoleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGrafanaRoleAssociationArgs {
  group_ids?: string[];
  role: string;
  user_ids?: string[];
  workspace_id: string;
  timeouts?: AwsGrafanaRoleAssociationArgsTimeouts;
}

export class aws_grafana_role_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGrafanaRoleAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_grafana_role_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
