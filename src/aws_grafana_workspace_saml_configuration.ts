import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceSamlConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGrafanaWorkspaceSamlConfigurationArgs {
  admin_role_values?: string[];
  allowed_organizations?: string[];
  editor_role_values: string[];
  groups_assertion?: string;
  idp_metadata_url?: string;
  idp_metadata_xml?: string;
  org_assertion?: string;
  role_assertion?: string;
  workspace_id: string;
  timeouts?: AwsGrafanaWorkspaceSamlConfigurationArgsTimeouts;
}

export class aws_grafana_workspace_saml_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceSamlConfigurationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_grafana_workspace_saml_configuration", resourceName);
  }

  get editor_role_values(): string {
    return `${this.resourceType}.${this.resourceName}.editor_role_values`;
  }

  get email_assertion(): string {
    return `${this.resourceType}.${this.resourceName}.email_assertion`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get login_assertion(): string {
    return `${this.resourceType}.${this.resourceName}.login_assertion`;
  }

  get login_validity_duration(): string {
    return `${this.resourceType}.${this.resourceName}.login_validity_duration`;
  }

  get name_assertion(): string {
    return `${this.resourceType}.${this.resourceName}.name_assertion`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
