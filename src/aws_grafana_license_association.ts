import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaLicenseAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGrafanaLicenseAssociationArgs {
  grafana_token?: string;
  license_type: string;
  workspace_id: string;
  timeouts?: AwsGrafanaLicenseAssociationArgsTimeouts;
}

export class aws_grafana_license_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGrafanaLicenseAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_grafana_license_association", resourceName);
  }

  get free_trial_expiration(): string {
    return `${this.resourceType}.${this.resourceName}.free_trial_expiration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get license_expiration(): string {
    return `${this.resourceType}.${this.resourceName}.license_expiration`;
  }

  get license_type(): string {
    return `${this.resourceType}.${this.resourceName}.license_type`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
