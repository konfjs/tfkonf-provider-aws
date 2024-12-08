import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceArgsNetworkAccessControl {
  prefix_list_ids: string[];
  vpce_ids: string[];
}

export interface AwsGrafanaWorkspaceArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsGrafanaWorkspaceArgsVpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}

export interface AwsGrafanaWorkspaceArgs {
  account_access_type: string;
  authentication_providers: string[];
  data_sources?: string[];
  description?: string;
  notification_destinations?: string[];
  organization_role_name?: string;
  organizational_units?: string[];
  permission_type: string;
  role_arn?: string;
  stack_set_name?: string;
  tags?: { [key: string]: string };
  network_access_control?: AwsGrafanaWorkspaceArgsNetworkAccessControl;
  timeouts?: AwsGrafanaWorkspaceArgsTimeouts;
  vpc_configuration?: AwsGrafanaWorkspaceArgsVpcConfiguration;
}

export class aws_grafana_workspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGrafanaWorkspaceArgs) {
    const meta = {network_access_control:{isBlock:true},timeouts:{isBlock:true},vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_grafana_workspace", resourceName);
  }

  get account_access_type(): string {
    return `${this.resourceType}.${this.resourceName}.account_access_type`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_providers(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_providers`;
  }

  get configuration(): string {
    return `${this.resourceType}.${this.resourceName}.configuration`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get grafana_version(): string {
    return `${this.resourceType}.${this.resourceName}.grafana_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get permission_type(): string {
    return `${this.resourceType}.${this.resourceName}.permission_type`;
  }

  get saml_configuration_status(): string {
    return `${this.resourceType}.${this.resourceName}.saml_configuration_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
