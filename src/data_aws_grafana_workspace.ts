import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGrafanaWorkspaceArgs {
  workspace_id: string;
}

export class data_aws_grafana_workspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGrafanaWorkspaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_grafana_workspace", resourceName);
  }

  get account_access_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_access_type`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_providers(): string {
    return `data.${this.resourceType}.${this.resourceName}.authentication_providers`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get data_sources(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_sources`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get grafana_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.grafana_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get notification_destinations(): string {
    return `data.${this.resourceType}.${this.resourceName}.notification_destinations`;
  }

  get organization_role_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization_role_name`;
  }

  get organizational_units(): string {
    return `data.${this.resourceType}.${this.resourceName}.organizational_units`;
  }

  get permission_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.permission_type`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get saml_configuration_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.saml_configuration_status`;
  }

  get stack_set_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.stack_set_name`;
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
